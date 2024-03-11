import React, { useEffect, useState } from "react";
import axios from "axios";
import InfosList from "../components/InfosList";
import AddInfo from "../components/AddInfo";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //! GET from database
  const getTutorials = async () => {
    try {
      const request = await axios.get(BASE_URL);
      setTutorials(request.data);
    } catch (error) {
      console.error(
        "An error occurred while fetching data with axios from the API:",
        error
      );
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);

  //! POST into database
  const postTutorial = async (newData) => {
    try {
      await axios.post(BASE_URL, newData);
      getTutorials(); //* after posting new data, get the updated data
    } catch (err) {
      console.log(
        "An error occurred while posting new data with axios into the API:",
        err
      );
    }
  };

  //! DELETE from database
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${BASE_URL}${id}/`);
      getTutorials(); //* after deleting a data, get the updated data
    } catch (error) {
      console.log(
        "An error occurred while deleting a data with axios from the API:",
        error
      );
    }
  };

  return (
    <div>
      <AddInfo postTutorial={postTutorial} />
      <InfosList tutorials={tutorials} deleteTutorial={deleteTutorial} />
    </div>
  );
};

export default Home;
