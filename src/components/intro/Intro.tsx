import { IMG_SRC_1, IMG_SRC_2, IMG_SRC_3 } from "./constants";
import "./Intro.css";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__names">Mameow & Alvin</div>
      <div className="intro__images">
        <img
          className="intro__image-small"
          src={IMG_SRC_1}
          alt="intro image left"
        />
        <img
          className="intro__image-large"
          src={IMG_SRC_2}
          alt="intro image middle"
        />
        <img
          className="intro__image-small"
          src={IMG_SRC_3}
          alt="intro image right"
        />
      </div>
    </div>
  );
};
