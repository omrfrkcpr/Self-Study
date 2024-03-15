import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import spinner from "../img/Spin-1s-200px.gif";
import NotFound from "./NotFound";

const TeacherDetails = () => {
  const navigate = useNavigate();

  //! 1. Method: stateless navigate

  // const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const { teacherId } = useParams();

  // const axiosData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/users/${teacherId}`
  //     );
  //     if (response.status !== 200) {
  //       throw new Error("Network response was not ok");
  //     }
  //     setUser(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(true);
  //     console.error("There was a problem with the fetch operation:", err);
  //   }
  // };

  // useEffect(() => {
  //   axiosData();
  // });

  // if (error) {
  //   return <NotFound />;
  // } else if (loading) {
  //   return (
  //     <div
  //       className=" border border-2 p-2 d-flex justify-content-center align-items-center"
  //       style={{ width: "300px", margin: "auto", height: "450px" }}
  //     >
  //       <img src={spinner} alt="loading-spinner" />
  //     </div>
  //   );
  // }

  // const { id, name, username, phone } = user;

  //! 2. Method: statefull navigate

  //? useLocation.//  navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //? Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz

  const {
    state: { user },
  } = useLocation();

  return (
    <div className="text-center">
      <div
        className=" border border-2 p-2"
        style={{ width: "300px", margin: "auto", height: "450px" }}
      >
        <img
          src={
            user.name !== undefined &&
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`
          }
          alt="avatar"
          className="mb-3"
          width="280px"
          height="300px"
        />
        <p className="fw-bold ">{user.name}</p>
        <p>{user.username}</p>
        <p>{user.phone}</p>
      </div>
      <div className="w-50 m-auto mt-4">
        <button onClick={() => navigate(-1)} className="btn btn-success me-3">
          Go Back
        </button>
        <button onClick={() => navigate("/")} className="btn btn-info">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default TeacherDetails;
