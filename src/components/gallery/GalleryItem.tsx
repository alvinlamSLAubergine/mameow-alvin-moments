interface GalleryItemProps {
  src: string;
  alt?: string;
}

export const GalleryItem = ({ src, alt }: GalleryItemProps) => {
  return (
    <div className="gallery__item">
      <img className="gallery__image" src={src} alt={alt || "Gallery Item"} />
    </div>
  );
};
