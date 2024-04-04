import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import InputSearch from "../components/InputSearch";
import UserInfo from "../components/UserInfo";
import NotFound from "../assets/404.gif";
import { Image, Row } from "react-bootstrap";
import { fetchUser } from "../api/apiGithubUser";
import spinner from "../assets/loading-buffering.gif";

const Home = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await fetchUser(username);
      setUser(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      getUserData();
    }
  }, [username]);

  return (
    <Container className="text-center">
      <InputSearch setUsername={setUsername} />
      {loading ? (
        <div>
          <Image src={spinner} alt="loading-spinner" />
        </div>
      ) : error ? (
        <Row className="justify-content-center h-25 w-100">
          <Image src={NotFound} className="h-25 w-50" alt="User not found" />
        </Row>
      ) : (
        user && <UserInfo user={user} />
      )}
    </Container>
  );
};

export default Home;
