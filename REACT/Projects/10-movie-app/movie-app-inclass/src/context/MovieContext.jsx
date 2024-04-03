import React, { createContext, useContext } from "react";

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export default MovieContextProvider;
