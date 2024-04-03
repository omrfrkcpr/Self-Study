import React from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";
import SearchForm from "../components/SearchForm";

const Main = () => {
  const { movies, loading } = useMovieContext();
  console.log("MAin", movies);

  return (
    <>
      <SearchForm />
      <div className="flex justify-center flex-wrap">
        {loading ? (
          <h2 className="text-2xl text-red-700 ">Loading...</h2>
        ) : (
          movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
