import { appConfig } from "@/app/lib/content";

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    const id = parsed.searchParams.get("v");
    if (id) {
      return `https://www.youtube.com/embed/${id}`;
    }
    if (parsed.pathname.includes("/embed/")) {
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
}

export function YouTubeEmbed() {
  const embedUrl = getYouTubeEmbedUrl(appConfig.youtubeUrl);

  if (!embedUrl) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-surface p-6 text-sm text-muted">
        Defina NEXT_PUBLIC_YOUTUBE_URL com uma URL valida do YouTube.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/25 bg-surface shadow-glow">
      <iframe
        title="Veja o NUL em acao"
        src={embedUrl}
        className="aspect-video w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
