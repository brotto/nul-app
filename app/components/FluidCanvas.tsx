"use client";

import { useEffect, useRef } from "react";

export default function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!gl) return;

    function getContainer() {
      return canvas!.closest("section") || document.body;
    }

    /* ── Mouse tracking ─────────────────────────────── */
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    function onMouseMove(e: MouseEvent) {
      const container = getContainer();
      const rect = container.getBoundingClientRect();
      mouse.tx = (e.clientX - rect.left) / rect.width;
      mouse.ty = 1.0 - (e.clientY - rect.top) / rect.height;
    }

    function onTouchMove(e: TouchEvent) {
      if (e.touches.length === 0) return;
      const container = getContainer();
      const rect = container.getBoundingClientRect();
      mouse.tx = (e.touches[0].clientX - rect.left) / rect.width;
      mouse.ty = 1.0 - (e.touches[0].clientY - rect.top) / rect.height;
    }

    const container = getContainer();
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("touchmove", onTouchMove, { passive: true });

    /* ── Resize ──────────────────────────────────────── */
    function resize() {
      const container = getContainer();
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(rect.width, 300);
      const h = Math.max(rect.height, 300);
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }

    resize();
    window.addEventListener("resize", resize);

    /* ── Shaders ─────────────────────────────────────── */
    const vert = `
      attribute vec2 a_pos;
      void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
    `;

    // Raymarched 3D metaballs with Phong lighting, specular, Fresnel, reflections
    const frag = `
      precision highp float;
      uniform float uTime;
      uniform vec2  uRes;
      uniform vec2  uMouse;

      #define MAX_STEPS 80
      #define MAX_DIST  20.0
      #define SURF_DIST 0.002
      #define NUM_BALLS 10

      vec3 BG = vec3(0.043, 0.043, 0.055);

      // Gold palette
      vec3 GOLD_DARK  = vec3(0.45, 0.33, 0.08);
      vec3 GOLD_MID   = vec3(0.83, 0.69, 0.22);
      vec3 GOLD_LIGHT = vec3(1.0, 0.92, 0.55);

      // Ball positions and radii (computed per-frame)
      vec3 ballPos[NUM_BALLS];
      float ballRad[NUM_BALLS];

      // Smooth-min for merging spheres (polynomial)
      float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5*(b - a)/k, 0.0, 1.0);
        return mix(b, a, h) - k*h*(1.0 - h);
      }

      // Scene SDF — all metaballs merged smoothly
      float sceneSDF(vec3 p) {
        float d = length(p - ballPos[0]) - ballRad[0];
        for (int i = 1; i < NUM_BALLS; i++) {
          float di = length(p - ballPos[i]) - ballRad[i];
          d = smin(d, di, 0.5);
        }
        return d;
      }

      // Normal via central differences
      vec3 calcNormal(vec3 p) {
        vec2 e = vec2(0.003, 0.0);
        return normalize(vec3(
          sceneSDF(p + e.xyy) - sceneSDF(p - e.xyy),
          sceneSDF(p + e.yxy) - sceneSDF(p - e.yxy),
          sceneSDF(p + e.yyx) - sceneSDF(p - e.yyx)
        ));
      }

      // Raymarch
      float raymarch(vec3 ro, vec3 rd) {
        float t = 0.0;
        for (int i = 0; i < MAX_STEPS; i++) {
          vec3 p = ro + rd * t;
          float d = sceneSDF(p);
          if (d < SURF_DIST) return t;
          if (t > MAX_DIST) break;
          t += d;
        }
        return -1.0;
      }

      // Soft shadow
      float softShadow(vec3 ro, vec3 rd, float tmax) {
        float res = 1.0;
        float t = 0.05;
        for (int i = 0; i < 32; i++) {
          float d = sceneSDF(ro + rd * t);
          res = min(res, 8.0 * d / t);
          t += clamp(d, 0.02, 0.2);
          if (t > tmax) break;
        }
        return clamp(res, 0.0, 1.0);
      }

      // AO
      float ambientOcclusion(vec3 p, vec3 n) {
        float ao = 0.0;
        float scale = 1.0;
        for (int i = 0; i < 5; i++) {
          float dist = 0.05 + 0.1 * float(i);
          float d = sceneSDF(p + n * dist);
          ao += (dist - d) * scale;
          scale *= 0.5;
        }
        return clamp(1.0 - 2.0 * ao, 0.0, 1.0);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
        float t = uTime * 0.2;

        // Mouse in normalized space
        vec2 mp = (uMouse - 0.5) * 2.0;

        // Setup ball positions
        ballPos[0] = vec3(sin(t*0.7)*1.5,       cos(t*0.5)*1.0,       sin(t*0.3)*0.5);
        ballRad[0] = 0.55;

        ballPos[1] = vec3(cos(t*0.6)*1.3,       sin(t*0.8)*0.8,       cos(t*0.4)*0.6);
        ballRad[1] = 0.45;

        ballPos[2] = vec3(sin(t*0.5+2.0)*1.0,   cos(t*0.4+1.0)*1.2,  sin(t*0.6+0.5)*0.4);
        ballRad[2] = 0.60;

        ballPos[3] = vec3(cos(t*0.9+4.0)*0.8,   sin(t*0.7+3.0)*0.6,  cos(t*0.5+1.0)*0.7);
        ballRad[3] = 0.35;

        ballPos[4] = vec3(sin(t*0.4+5.0)*1.8,   cos(t*0.6+2.5)*0.9,  sin(t*0.7+2.0)*0.3);
        ballRad[4] = 0.50;

        ballPos[5] = vec3(cos(t*0.8+1.5)*0.9,   sin(t*0.3+4.5)*1.4,  cos(t*0.6+3.0)*0.5);
        ballRad[5] = 0.40;

        ballPos[6] = vec3(sin(t*0.3+3.0)*1.6,   cos(t*0.9+0.5)*0.7,  sin(t*0.4+4.0)*0.6);
        ballRad[6] = 0.30;

        ballPos[7] = vec3(cos(t*0.5+6.0)*1.1,   sin(t*0.6+5.0)*1.1,  cos(t*0.8+1.5)*0.4);
        ballRad[7] = 0.25;

        // Mouse-following balls
        ballPos[8] = vec3(mp.x * 2.5, mp.y * 2.0, 0.5);
        ballRad[8] = 0.50;

        ballPos[9] = vec3(mp.x * 2.0 + sin(t*2.0)*0.3, mp.y * 1.5 + cos(t*2.0)*0.3, 0.3);
        ballRad[9] = 0.30;

        // Camera
        vec3 ro = vec3(0.0, 0.0, 5.5);
        vec3 rd = normalize(vec3(uv, -1.5));

        // Lights
        vec3 lightDir1 = normalize(vec3(1.0, 1.5, 2.0));
        vec3 lightDir2 = normalize(vec3(-1.0, 0.5, 1.5));
        vec3 lightCol1 = GOLD_LIGHT * 1.2;
        vec3 lightCol2 = vec3(0.4, 0.35, 0.55);

        float dist = raymarch(ro, rd);

        vec3 col = BG;

        if (dist > 0.0) {
          vec3 p = ro + rd * dist;
          vec3 n = calcNormal(p);
          vec3 v = normalize(ro - p);

          // Fresnel (Schlick)
          float fresnel = pow(1.0 - max(dot(n, v), 0.0), 4.0);

          // Diffuse
          float diff1 = max(dot(n, lightDir1), 0.0);
          float diff2 = max(dot(n, lightDir2), 0.0);

          // Specular (Blinn-Phong)
          vec3 h1 = normalize(lightDir1 + v);
          vec3 h2 = normalize(lightDir2 + v);
          float spec1 = pow(max(dot(n, h1), 0.0), 64.0);
          float spec2 = pow(max(dot(n, h2), 0.0), 32.0);

          // Soft shadow from main light
          float shadow = softShadow(p + n * 0.02, lightDir1, 6.0);

          // AO
          float ao = ambientOcclusion(p, n);

          // Base gold color — varies with normal for iridescence
          vec3 baseCol = mix(GOLD_DARK, GOLD_MID, 0.5 + 0.5 * dot(n, vec3(0.0, 1.0, 0.0)));

          // Reflection (fake env — gradient)
          vec3 refl = reflect(-v, n);
          float envUp = 0.5 + 0.5 * refl.y;
          vec3 envCol = mix(GOLD_DARK * 0.3, GOLD_LIGHT * 0.5, envUp);

          // Compose lighting
          vec3 ambient = baseCol * 0.15 * ao;
          vec3 diffuse = baseCol * (diff1 * lightCol1 * shadow + diff2 * lightCol2) * 0.5;
          vec3 specular = lightCol1 * spec1 * shadow * 1.2 + lightCol2 * spec2 * 0.4;
          vec3 reflection = envCol * fresnel * 0.8;

          col = ambient + diffuse + specular + reflection;

          // Rim light (gold edge glow)
          float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
          col += GOLD_MID * rim * 0.35;

          // Bright specular highlights (glass-like)
          float specBright = pow(max(dot(n, h1), 0.0), 256.0);
          col += vec3(1.0, 0.95, 0.8) * specBright * 2.0 * shadow;

          // Depth fade
          float depthFade = 1.0 - smoothstep(3.0, 8.0, dist);
          col = mix(BG, col, depthFade);
        }

        // Subtle vignette
        vec2 vUv = gl_FragCoord.xy / uRes;
        col *= 1.0 - length(vUv - 0.5) * 0.4;

        // Tone mapping (ACES-ish)
        col = col / (col + 0.5);
        col = pow(col, vec3(0.9));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(src: string, type: number) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error("[FluidCanvas] Shader:", gl!.getShaderInfoLog(s));
        return null;
      }
      return s;
    }

    const vs = compile(vert, gl.VERTEX_SHADER);
    const fs = compile(frag, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("[FluidCanvas] Link:", gl.getProgramInfoLog(prog));
      return;
    }

    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes  = gl.getUniformLocation(prog, "uRes");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    let animId: number;
    const start = performance.now();

    function frame() {
      // Smooth mouse interpolation
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      const elapsed = (performance.now() - start) * 0.001;
      gl!.uniform1f(uTime, elapsed);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(frame);
    }

    console.log("[FluidCanvas] Running. Size:", canvas.width, "x", canvas.height);
    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        display: "block",
      }}
    />
  );
}
