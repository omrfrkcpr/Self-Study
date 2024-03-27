import React, { useEffect, useState } from "react";
import Main from "./NotFoundStyle";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev)=>(prev===0 ? prev :prev-1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if(count===0) {
return <Navigate to="/home"/>

  }
  return (
    <Main>
      <div>
        <h3>Something went Wrong</h3>
        <p>
          Within <strong>{count}</strong> seconds, you will be redirected to the home
          page!
        </p>
      </div>
    </Main>
  );
};

export default NotFound;
