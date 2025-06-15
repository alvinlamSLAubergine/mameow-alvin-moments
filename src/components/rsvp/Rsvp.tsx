import cat from "../../assets/cat.svg";
import "./Rsvp.css";

export const Rsvp = () => {
  return (
    <div className="rsvp">
      <div className="rsvp__inner">
        <h1>RSVP</h1>
        <div className="rsvp__group">
          <div className="rsvp__image-container">
            <img className="rsvp__image" src={cat} />
          </div>
          <div className="rsvp__text">
            <p>
              We would love to know if you can join us on our special day.
              Please click on the button below to fill the RSVP form{" "}
              <b>by 31 October</b>.
            </p>
            <button className="rsvp__button">CLICK HERE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
