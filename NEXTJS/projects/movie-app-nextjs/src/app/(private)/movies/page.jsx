import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

const Movies = async () => {
  const movieData = await getMovies("now_playing");

  // console.log(movieData);

  const movieSectionData = [
    { id: 1, title: "NOW PLAYING", type: "now_playing" },
    { id: 2, title: "POPULAR", type: "popular" },
    { id: 3, title: "TOP RATED", type: "top_rated" },
    { id: 4, title: "UPCOMING", type: "upcoming" },
  ];

  return (
    <div className="pt-20">
      {movieData ? (
        <div>
          <HeroSection
            title={movieData[0]?.title}
            overview={movieData[0].overview}
            id={movieData[0]?.id}
          />
          <div className="py-10">
            {movieSectionData.map(({ id, title, type }) => (
              <MovieSection key={id} title={title} type={type} />
            ))}
          </div>
        </div>
      ) : (
        <div>Movie Data Not Found!</div>
      )}
    </div>
  );
};

export default Movies;
