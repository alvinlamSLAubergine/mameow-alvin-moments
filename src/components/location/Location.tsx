import { IMG_SRC } from "./constants";
import "./Location.css";

export const Location = () => {
  return (
    <div className="location">
      <h1>LOCATION</h1>
      <div className="location__group">
        <a
          className="location__image-wrapper"
          href="https://maps.app.goo.gl/3t3qxfcNw6x1jcKt9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IMG_SRC} alt="location" className="location__image" />
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25911.506547688023!2d100.36010139669385!3d13.780443325497423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29754458c9023%3A0xa53fe6796faf6a6d!2sCountry%20Cottage%20Magic%20Love%20House!5e0!3m2!1sen!2sth!4v1749994332712!5m2!1sen!2sth"
          style={{ border: 0, flex: 1 }}
          loading="lazy"
          allowFullScreen
          width={"100%"}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2>COUNTRY COTTAGE</h2>
      <h4>BANGKOK, THAILAND</h4>
    </div>
  );
};
