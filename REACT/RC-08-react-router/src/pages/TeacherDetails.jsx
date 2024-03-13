import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TeacherDetails = () => {
  const [user, setUser] = useState([]);
  const { teacherId } = useParams();
  const navigate = useNavigate();

  const axiosData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${teacherId}`
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setUser(response.data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    axiosData();
  });

  const { id, name, username, phone } = user;

  return (
    <div className="text-center">
      <div
        key={id}
        className=" border border-2 p-2"
        style={{ width: "300px", margin: "auto", height: "450px" }}
      >
        <img
          src={
            name !== undefined &&
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
          }
          alt="avatar"
          className="mb-3"
          width="280px"
          height="300px"
        />
        <p className="fw-bold ">{name}</p>
        <p>{username}</p>
        <p>{phone}</p>
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
