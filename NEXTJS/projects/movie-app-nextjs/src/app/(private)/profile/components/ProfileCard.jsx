import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({ name, image }) => {
  const router = useRouter();
  return (
    <div
      className="w-52 md:w-48 mx-auto cursor-pointer group text-center space-y-2"
      onClick={() => router.push("/movies")}
    >
      <div className="w-52 h-52 md:w-48 md:h-48 rounded-md border-2 border-transparent group-hover:border-white overflow-hidden">
        <img src={image} alt="profile" className="w-max h-max object-contain" />
      </div>
      <div className="mt-4 text-gray-400 text-xl text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default ProfileCard;
