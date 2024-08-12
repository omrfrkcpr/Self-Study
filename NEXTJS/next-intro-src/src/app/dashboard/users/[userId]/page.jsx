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

export async function generateStaticParams() {
  const usersArr = [1, 2, 3, 4]; // api den gelecek veri
  return usersArr.map((userId) => ({
    userId: userId.toString(),
  }));
}
