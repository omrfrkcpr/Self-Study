"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ poster_path, vote_average, id, title }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`movies/${id}`)}
      className="w-40 h-[240px] cursor-pointer relative duration-200 group"
    >
      <Image
        src={poster_path ? `${IMG_API}${poster_path}` : defaultImage}
        width={240}
        height={160}
        alt="movie-poster"
      />
      <div className="absolute inset-0 px-2 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white bg-black/50">
        {title}
      </div>
      <span className="text-black absolute bottom-1 right-1 bg-white/70 rounded-full py-1 px-2">
        {vote_average.toFixed(1)}
      </span>
    </div>
  );
};

export default MovieCard;
