import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAxiosFect = () => {
  const [people, setPeople] = useState([]); // initial value must be "[]" - Array

  /* ---------------------------------- */
  /*                FETCH               */
  /* ---------------------------------- */

  //! 1. Method = (fect) then - chain
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setPeople(data));
  // }, []);

  //! 2. Method = (fetch) async-await & try-catch
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setPeople(data);
  //   } catch (error) {
  //     // Handle error:
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // };

  // //? render fetchData() only one time - componentDidMount -
  // useEffect(() => {
  //   fetchData();
  // }, []);

  /* ---------------------------------- */
  /*                AXIOS               */
  /* ---------------------------------- */

  //! 3. Method = (axios) then - chain
  //* We dont need to chain (then) to convert data-format to JSON. It comes default in JSON
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((api) => setPeople(api.data));
  // }, []);

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
        {people.map(({ id, name, username, phone }) => {
          return (
            <div
              key={id}
              className="col-12 col-sm-6 col-md-4 border border-2 p-2"
            >
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                alt="avatar"
                className="mb-3"
              />
              <p className="fw-bold ">{name}</p>
              <p>{username}</p>
              <p>{phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectAxiosFect;
