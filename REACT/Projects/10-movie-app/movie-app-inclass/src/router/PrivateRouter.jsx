import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateRouter = ({ path, ...props }) => {
  const { currentUser } = useAuthContext();

  return currentUser ? <Route {...props} path="/" /> : <Navigate to="/login" />;
};

export default PrivateRouter;
