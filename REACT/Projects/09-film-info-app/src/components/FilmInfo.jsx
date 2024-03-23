import React from "react";
import StarRatingComponent from "react-star-rating-component";

const FilmInfo = ({ film }) => {
  return (
    <div
      id="image-div"
      className="col-12 col-sm-11 "
      style={{
        backgroundImage: `url(${film.image})`,
        borderRadius: 10 
        
      }}
    >
      <div className="film-info">
        <div>
          <h3>{film.title}</h3>
          <span className="texts">{film.body}</span>
        </div>
        <div className="d-flex  gap-5 justify-content-between">
        <article className="d-flex align-items-center">
          <div className="d-flex ">
            <span className="text-danger p-1 rounded-3">
              <ul>
                {film.tags.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
            </span>
          </div>
        </article>
        <article className="d-flex align-items-center">
          <div className="d-flex mx-1 align-items-center">
            <div
              className="d-flex pe-1 pe-md-2 pe-lg-4 align-items-center"
              style={{ fontSize: "1.8rem" }}
            >
              <StarRatingComponent
                name="rate"
                starCount={5}
                value={`${(film.rate/2).toFixed(1)}`}
                editing={true}
              />
            </div>
            <div
              className="pe-1 pe-md-2 pe-lg-4 d-flex align-items-center text-danger"
              style={{ fontSize: "1.4rem" }}
            >
              {`10 / ${film.rate.toFixed(1)}`}
            </div>
          </div>
        </article>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
