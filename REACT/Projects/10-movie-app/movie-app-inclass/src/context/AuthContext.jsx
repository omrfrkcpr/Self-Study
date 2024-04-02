import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { auth } from "../auth/firebase";

// create context
const AuthContext = createContext();

// context provider
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
  };

  return (
    <AuthContext.Provider value={(currentUser, register)}>
      {children}
    </AuthContext.Provider>
  );
};

// consumer with custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
