"use client";

import React from "react";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";

const profileImages = [
  "default-blue.png",
  "default-red.png",
  "default-slate.png",
  "default-green.png",
];

const CardContainer = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
      {profileImages.map((imgPath, index) => (
        <div key={index}>
          <ProfileCard
            image={`/images/${imgPath}`}
            name={
              index == 0 && currentUser
                ? currentUser.displayName
                : `Guest ${index + 1}`
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
