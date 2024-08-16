import {
  getMovieDetails,
  getMovies,
  getVideoKey,
} from "@/helpers/movieFunctions";
import React from "react";
import VideoSection from "../components/VideoSection";
import Link from "next/link";
import { BackspaceIcon } from "@heroicons/react/24/solid";

const MovieDetail = async ({ params: { movieId } }) => {
  console.log(movieId);

  const movieDetails = await getMovieDetails(movieId);
  const videoKey = await getVideoKey(movieId);

  const { title } = movieDetails;

  return (
    <div className="p-10 mx-auto space-y-5">
      <h1 className="text-center text-white text-3xl">{title}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="flex items-center mt-3 md:mt-4 gap-3">
        <Link
          href={"/movies"}
          className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
        >
          <BackspaceIcon className="w-4 md:w-7 text-black mr-1" />
          <span className="text-black">Back</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;

// For Static Pages
export async function generateStaticParams() {
  const [movies1, movies2, movies3, movies4] = await Promise.all([
    getMovies("now_playing"),
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
  ]);

  return [...movies1, ...movies2, ...movies3, ...movies4].map((movie) => ({
    movieId: movie.id.toString(),
  }));
}

export async function generateMetadata({ params: { movieId } }) {
  const { title } = await getMovieDetails(movieId);
  return {
    title: `${title} | Movie Details`,
    description: `Check out ${title} movie details, trailers, and more`,
  };
}