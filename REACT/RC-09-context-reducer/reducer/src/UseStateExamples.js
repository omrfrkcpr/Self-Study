import { useState, useEffect } from "react";
import load from "./img/Spin-1s-200px.gif";

const UseStateExample = () => {
  const [dogResim, setDog] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message);
        setLoading(false);
      })
      .catch(() => {
        setError("DİKKAT URL DE HATA VAR");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => fetchDog()}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {loading ? (
        <img src={load} alt="" />
      ) : (
        dogResim && <img src={dogResim} alt="" />
      )}

      {error && <h2>{error}</h2>}
    </div>
  );
};

export default UseStateExample;
