import React from "react";
import CardContainer from "./components/CardContainer";

export const metadata = {
  title: "Profile",
  description: "Profile page for a users' accounts",
};

const Profile = () => {
  return (
    <div className="flex items-center justify-center pt-20 flex-col gap-10">
      <h1 className="text-3xl md:text-6xl text-white text-center">
        Who's watching
      </h1>
      <CardContainer />
    </div>
  );
};

export default Profile;
