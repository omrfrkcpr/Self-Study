"use client";

import toastNotify from "@/helpers/toastNofity";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PrivateLayout = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.auth);
  // useEffect kullanarak client te calisan bir yapi elde ediyoruz. Serverdan browser verilerine erisemeyiz. (session veya localStorage)

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default PrivateLayout;
