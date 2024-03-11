import React, { useEffect, useState } from "react";
import axios from "axios";
import InfosList from "../components/InfosList";
import AddInfo from "../components/AddInfo";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorial = async () => {
    try {
      const response = await axios.get(url);
      setTutorials(response.data);
    } catch (error) {
      console.error(
        "An error occurred while fetching data with axios from the API:",
        error
      );
    }
  };

  useEffect(() => {
    getTutorial();
  }, []);

  return (
    <div>
      <AddInfo />
      <InfosList tutorials={tutorials} />
    </div>
  );
};

export default Home;
