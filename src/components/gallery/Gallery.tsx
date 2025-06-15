import {
  IMG_SRC_1,
  IMG_SRC_11,
  IMG_SRC_12,
  IMG_SRC_13,
  IMG_SRC_14,
  IMG_SRC_15,
  IMG_SRC_16,
  IMG_SRC_17,
  IMG_SRC_18,
  IMG_SRC_19,
  IMG_SRC_2,
  IMG_SRC_3,
  IMG_SRC_4,
  IMG_SRC_5,
  IMG_SRC_6,
  IMG_SRC_7,
  IMG_SRC_8,
  IMG_SRC_9,
} from "./constants";
import "./Gallery.css";
import { GalleryItem } from "./GalleryItem";

export const Gallery = () => {
  return (
    <div className="gallery">
      <h1>GALLERY</h1>
      <div className="gallery__group">
        <GalleryItem src={IMG_SRC_2} />
        <GalleryItem src={IMG_SRC_3} />
        <GalleryItem src={IMG_SRC_4} />
        <GalleryItem src={IMG_SRC_5} />
        <GalleryItem src={IMG_SRC_6} />
        <GalleryItem src={IMG_SRC_7} />
        <GalleryItem src={IMG_SRC_8} />
        <GalleryItem src={IMG_SRC_9} />
        <GalleryItem src={IMG_SRC_11} />
        <GalleryItem src={IMG_SRC_12} />
        <GalleryItem src={IMG_SRC_13} />
        <GalleryItem src={IMG_SRC_14} />
        <GalleryItem src={IMG_SRC_15} />
        <GalleryItem src={IMG_SRC_16} />
        <GalleryItem src={IMG_SRC_19} />
        <GalleryItem src={IMG_SRC_1} />
        <GalleryItem src={IMG_SRC_17} />
        <GalleryItem src={IMG_SRC_18} />
      </div>
    </div>
  );
};
