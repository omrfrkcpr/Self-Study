import { useReducer } from "react";
// import { reducerAA, state1 } from "./reducer";
import load from "./img/Spin-1s-200px.gif";

const UseReducerExample = () => {
  // action1 alttaki fetchDog dan gelen payload
  const reducerAA = (state1, action1) => {
    switch (action1.type) {
      case "START":
        return { ...state1, loading: true };
      case "SUCCESS":
        return { ...state1, dog: action1.payload, loading: false };
      case "FAIL":
        return { ...state1, error: action1.payload, loading: false };
      default:
    }
  };
  const state1 = {
    loading: false,
    dog: "",
    error: "",
  };

  const [state, dispatch1] = useReducer(reducerAA, state1);

  const { dog, loading, error } = state;

  const fetchDog = () => {
    //? 1. istegin basladigi asama (START)
    dispatch1({ type: "START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        //? 2. istegin basarili bittigi asama
        dispatch1({ type: "SUCCESS", payload: data.message });
      })
      .catch(() => {
        //? 3. istegin basarisiz bittigi asama
        dispatch1({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED!" });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" />}
      {error && <h2>{error}</h2>}
      {loading && <img src={load} alt="" />}
    </div>
  );
};

export default UseReducerExample;
