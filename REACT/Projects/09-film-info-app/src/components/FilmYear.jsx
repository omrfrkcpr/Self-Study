import { data } from "../helper/data.js";
import { useState } from "react";
import FilmInfo from "./FilmInfo";
function FilmYear() {
  const [film, setFilm] = useState(data[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (filmSelected, index) => {
    setFilm(filmSelected);
    setActiveIndex(index);
  };

  return (
    <>
      <div className="col-12 col-lg-1">
        <div
          className="nav nav-pills d-flex align-items-start "
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {data.map((film, index) => (
            <button
              className={`border-0 px-2 m-2 fs-4 fw-bold text-secondary ${
                activeIndex === index ? "activeBtn" : ""
              }`}
              id="v-pills-home-tab"
              type="button"
              role="tab"
              onClick={() => handleTabClick(film, index)}
            >
              {film.date}
            </button>
          ))}
        </div>
      </div>
      <FilmInfo film={film} />
    </>
  );
}

export default FilmYear;
