import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const [people, setPeople] = useState([]); // initial value must be "[]" - Array
  const navigate = useNavigate();
  /* ---------------------------------- */
  /*                AXIOS               */
  /* ---------------------------------- */

  //! 4. Method = (axios) async-await & try-catch -- [BEST]

  const axiosData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setPeople(response.data);
    } catch (error) {
      // Handle error:
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    axiosData();
  }, []);

  // console.log("sss");

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map((user) => {
          return (
            <div
              key={user.id}
              className="col-12 col-sm-6 col-md-4 border border-2 p-2"
            >
              <img
                // onClick={() => navigate(`/teacher/${user.id}`)}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                alt="avatar"
                onClick={() =>
                  navigate(`/teacher/${user.id}`, { state: { user } })
                }
                className="mb-3"
                style={{ cursor: "pointer" }}
              />
              <p className="fw-bold ">{user.name}</p>
              <p>{user.username}</p>
              <p>{user.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teacher;
