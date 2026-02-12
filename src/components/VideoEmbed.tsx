import type { VimeoVideo } from "@/lib/videos";

type VideoEmbedProps = VimeoVideo & { className?: string };

// Renders a responsive, lazy-loaded Vimeo iframe embed without extra framing UI.
export function VideoEmbed({ id, title, className }: VideoEmbedProps) {
  const src = `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&dnt=1`;

  return (
    <div className={className}>
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
