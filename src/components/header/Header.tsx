import "./Header.css";

export const Header = () => {
  const handleClick = (section: string) => {
    document.querySelector(`.${section}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <div onClick={() => handleClick("schedule")} className="header__item">
        SCHEDULE
      </div>
      <div onClick={() => handleClick("location")} className="header__item">
        LOCATION
      </div>
      <div onClick={() => handleClick("gallery")} className="header__item">
        GALLERY
      </div>
    </div>
  );
};
