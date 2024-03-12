import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/footer/Footer";
import User from "./components/user/User";

function App() {
  const [user, setUser] = useState([]);
  const url = "https://randomuser.me/api/";

  const getUser = async () => {
    try {
      const response = axios.get(url);
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      setUser(response.data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <User user={user} setUser={setUser} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
