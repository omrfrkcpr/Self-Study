import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useMovieContext } from "../context/MovieContext";
import { toastWarnNotify } from "../helpers/toastNotify";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useAuthContext();
  const { getMovies } = useMovieContext();

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser && searchTerm.trim()) {
      getMovies(searchUrl + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Please log in");
    } else {
      toastWarnNotify("Please enter text!");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-2">
      <input
        type="search"
        name="query"
        className="w-80 h-8 rounded-md p-1 m-2"
        placeholder="Search a movie..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn-danger-bordered">Search</button>
    </form>
  );
};

export default SearchForm;
