import { IMG_SRC } from "./constants";
import "./Location.css";

export const Location = () => {
  return (
    <div className="location">
      <h1>LOCATION</h1>
      <a
        href="https://maps.app.goo.gl/3t3qxfcNw6x1jcKt9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={IMG_SRC} alt="location" className="location__image" />
      </a>
      <h2>COUNTRY COTTAGE</h2>
      <h4>BANGKOK, THAILAND</h4>
    </div>
  );
};
