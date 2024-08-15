// "use client"

import GoBack from "@/components/GoBack";
// import { useParams } from "next/navigation";
import React from "react";

const UserDetail = ({ params }) => {
  //! const {userId} = useParams() // Url parametresini client componentlerde useParams hooku ile, server componentlerde props uzerinden params ile yakalayabiliyoruz.
  const { userId } = params;
  return (
    <div className="p-4 text-3xl w-full">
      <h1 className="ml-2">UserDetail - {userId}</h1>
      <GoBack />
    </div>
  );
};

export default UserDetail;

// return a list of params to populate the [slug] dynamic segment. (To change dynamic page to static page) => we give information how many page exist in this dynamic route
export async function generateStaticParams() {
  const usersArr = [1, 2, 3, 4]; // api den gelecek veri
  return usersArr.map((userId) => ({
    userId: userId.toString(),
  }));
}

// Create meta data for dynamic pages
export async function generateMetadata({ params: { userId } }) {
  return {
    title: `User Detail - ${userId}`,
    description: `User Detail Page for user ${userId}`,
  };
}
