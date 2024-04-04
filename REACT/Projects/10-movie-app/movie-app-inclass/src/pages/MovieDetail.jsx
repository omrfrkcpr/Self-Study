import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
const MovieDetail = () => {
  const { currentUser } = useAuthContext();

  const navigate = useNavigate();

  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [videoKey, setVideoKey] = useState("");
  // console.log(id);
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`;
  const movieVideo = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`;

  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"; //* resim yoksa default resmi göster diyecez

  const getMovieDetail = async () => {
    try {
      const response = await fetch(movieDetailUrl);
      const data = await response.json();
      setMovieDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieVideo = async () => {
    try {
      const response = await fetch(movieVideo);
      const data = await response.json();
      setVideoKey(data.results[0].key);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movieDetail);

  useEffect(() => {
    getMovieDetail();
    getMovieVideo();
  }, [id]);

  const {
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    vote_count,
  } = movieDetail;

  return (
    <div>
      {currentUser && (
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="text-4xl dark:text-white m-3">{title}</h1>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="flex min-w-[300px] w-[70%] min-h-[400px] my-10 bg-white shadow-xl rounded-[12px] overflow-hidden">
            <div className="w-1/3">
              <img
                loading="lazy"
                className="object-fit h-[100%]"
                src={
                  poster_path
                    ? "https://image.tmdb.org/t/p/w1280" + poster_path
                    : defaultImage
                }
                alt="movie-card"
              />
            </div>
            <div className="flex flex-col justify-between p-5 w-2/3">
              <div className="space-y-3">
                <h2 className="text-2xl text-black">Overview</h2>
                <p className="text-black">{overview}</p>
              </div>
              <div>
                <ul className="border-[2px] rounded-lg">
                  <li className="border-b-[2px] px-5 py-[5px]">
                    <span className="font-bold">Release Date :</span>{" "}
                    {release_date}
                  </li>
                  <li className="border-b-[2px] px-5 py-[5px]">
                    <span className="font-bold">Rate :</span> {vote_average}
                  </li>
                  <li className="border-b-[2px] px-5 py-[5px]">
                    <span className="font-bold">Total Vote :</span> {vote_count}
                  </li>
                  <li>
                    <button
                      className="text-blue-400 px-5 py-[5px] hover:text-blue-950 hover:underline"
                      onClick={() => navigate("/")}
                    >
                      Go Back
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
