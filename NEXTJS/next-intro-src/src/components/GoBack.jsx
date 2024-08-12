"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GoBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-gray-800 hover:text-gray-100 hover:bg-gray-800 font-semibold text-lg border border-gray-800 duration-300 rounded-full px-3 p-1 float-right"
    >
      Go Back
    </button>
  );
};

export default GoBack;
