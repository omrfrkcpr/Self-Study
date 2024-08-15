"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <Image
        src="/images/404-page-not-found.png"
        alt="not-found"
        width={500}
        height={400}
      />
      <button
        onClick={() => router.back()}
        className="text-gray-100 bg-gray-800 hover:bg-gray-950 font-semibold py-2 px-4 rounded shadow mt-4"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
