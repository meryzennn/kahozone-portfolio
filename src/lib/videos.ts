export type VimeoVideo = {
  provider: "vimeo";
  id: string;
  title: string;
};

// Stores a single Vimeo video for the one-page site.
export const showreel: VimeoVideo = {
  provider: "vimeo",
  id: "76979871",
  title: "Showreel",
};

// Returns the single showreel video.
export function getShowreel(): VimeoVideo {
  return showreel;
}
