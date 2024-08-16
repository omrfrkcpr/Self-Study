"use client";

import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { useDraggable } from "react-use-draggable-scroll";

const MovieList = ({ movies }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <div
      className="grid grid-flow-col gap-2 overflow-x-scroll"
      {...events}
      ref={ref}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
