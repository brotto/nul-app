import Image from "next/image";

export function AppMockup() {
  return (
    <div className="relative mx-auto max-w-xs rounded-[2.5rem] border border-gold/40 bg-gradient-to-b from-surface to-black p-3 shadow-glow">
      <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle,rgba(212,175,55,0.2),transparent_65%)]" />
      <div className="overflow-hidden rounded-[2rem] border border-gold/25 bg-bg">
        <Image
          src="/logo.png"
          alt="Preview do app NUL"
          width={640}
          height={1280}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
