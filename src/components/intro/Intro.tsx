import { IMG_SRC_4 } from "./constants";
import "./Intro.css";

export const Intro = () => {
  return (
    <div className="intro">
      {/* <div className="intro__names">Mameow & Alvin</div> */}
      <div className="intro__images">
        <img
          className="intro__image-large"
          src={IMG_SRC_4}
          alt="intro image middle"
        />
      </div>
      <div>
        <div className="intro__text">
          <p>
            After all the laughter, adventures, and moments that have brought us
            closer, we're ready to begin the next chapter of our lives together.
          </p>
          <p>
            We're deeply grateful for the love and support that surrounds us.
            Having you with us will make this day even more meaningful.
          </p>
          <p>
            With all our hearts, we invite you to join us in celebrating our
            wedding.
          </p>
          <p>
            Let's gather in love, share stories, smiles, and memories that will
            last a lifetime. Your presence would truly mean the world to us.
          </p>
        </div>
      </div>
    </div>
  );
};
