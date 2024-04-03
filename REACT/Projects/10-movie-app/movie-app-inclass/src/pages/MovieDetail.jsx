import React, { useState } from "react";
import { useParams } from "react-router-dom";
const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [videoKey, setVideoKey] = useState("");
  console.log(id);
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`;
  const movieVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`;

  return <div>MovieDetail</div>;
};

export default MovieDetail;
