"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DetailCard = ({ avatar, first_name, last_name, email }) => {
  const router = useRouter();
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow pt-4">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={avatar}
          alt="Bonnie image"
        />
        <h5>
          {first_name} {last_name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
        <div className="flex mt-4 md:mt-6">
          <button className="btn-primary">Add friend</button>
          <button className="btn-secondary" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
