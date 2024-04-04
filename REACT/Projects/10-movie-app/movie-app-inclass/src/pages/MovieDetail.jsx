import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";
import ErrorPage from "../components/ErrorPage";

const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [videoKey, setVideoKey] = useState("");
  const [error, setError] = useState(false); //! id olmadığı durumlar için error yönetimi

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetail;

  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`; //* filme ait olan detail verisini çekecek olan veri
  const movieVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`; //! videoya ait olan youtube embed id yi çekmek için kullanılacak olan adres

  useEffect(() => {
    axios
      .get(movieDetailUrl)
      .then((res) => {
        setMovieDetail(res.data);
        setError(false);
      })
      .catch((err) => setError(true));
    axios
      .get(movieVideo)
      .then((res) => setVideoKey(res.data.results[0]?.key))
      .catch((err) => console.log(err));
  }, [movieDetailUrl, movieVideo]);

  return (
    <div className="md:container px-10 mx-auto py-5">
      <h1 className="text-center dark:text-white text-black text-3xl">
        {title}
      </h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="md:container flex justify-center px-10">
        {error ? (
          <ErrorPage />
        ) : (
          <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">
            <img
              className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={poster_path ? baseImageUrl + poster_path : defaultImage}
              alt="poster"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Overview
                </h5>
                <p className="text-gray-700 text-base mb-4">{overview}</p>
              </div>
              <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900">
                <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
                  {"Release Date : " + release_date}
                </li>
                <li className="px-6 py-2 border-b border-gray-400 w-full">
                  {"Rate : " + vote_average}
                </li>
                <li className="px-6 py-2 border-b border-gray-400 w-full">
                  {"Total Vote : " + vote_count}
                </li>
                <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
                  <Link
                    to={-1}
                    className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                  >
                    Go Back
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
