import "./Header.css";

export const Header = () => {
  const handleClick = () => {
    document.querySelector(".schedule")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <div onClick={handleClick} className="header__item">
        SCHEDULE
      </div>
      <div className="header__item">LOCATION</div>
      <div className="header__item">GALLERY</div>
    </div>
  );
};
