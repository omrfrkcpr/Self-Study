import React, { useEffect, useState } from "react";
import axios from "axios";

const GetRandomUser = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      setUser(response.data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //! ComponentDidMount
    const timer = setInterval(getUser, 3000);
    getUser();

    //! ComponentWillUnMount
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row border border-2 w-50 m-auto">
        <h1>
          {user?.name?.first} {user?.name?.last}
        </h1>
        <img
          src={user?.picture?.large}
          className="rounded-circle"
          alt=""
          style={{ width: "300px", margin: "1rem auto" }}
        />
        <h3>{user?.email}</h3>

        <h4>{new Date(user?.dob?.date).toLocaleDateString()}</h4>
        <h5>{user?.phone}</h5>
        <h6>{user?.location?.city}</h6>
      </div>
    </div>
  );
};

export default GetRandomUser;
