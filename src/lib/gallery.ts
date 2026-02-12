export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Stores 6 images for the one-page layout with explicit dimensions for correct intrinsic ratios.
export const galleryItems: GalleryItem[] = [
  { src: "/gallery/01.jpg", alt: "Frame 01", width: 1200, height: 1600 },
  { src: "/gallery/02.jpg", alt: "Frame 02", width: 1200, height: 1600 },
  { src: "/gallery/03.jpg", alt: "Frame 03", width: 1200, height: 1600 },
  { src: "/gallery/04.jpg", alt: "Frame 04", width: 1200, height: 1600 },
  { src: "/gallery/05.jpg", alt: "Frame 05", width: 1200, height: 1600 },
  { src: "/gallery/06.jpg", alt: "Frame 06", width: 1200, height: 1600 },
];

// Returns the gallery items in display order.
export function getGallery(): GalleryItem[] {
  return [...galleryItems];
}
