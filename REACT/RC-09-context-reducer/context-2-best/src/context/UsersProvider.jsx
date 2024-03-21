import React, { createContext, useContext } from "react";

import { useEffect } from "react";
import { useState } from "react";

//! Create Context
export const UsersContext = createContext();

//!Provider
const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    await fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        // add width in every user
        const usersWithDefaultWidth = data.map((user) => ({
          ...user,
          width: Math.trunc(Math.random() * 200 + 100), // default width value
        }));
        setUsers(usersWithDefaultWidth);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const changeWidth = (px, id) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, width: px } : user))
    );
  };

  return (
    <UsersContext.Provider value={{ users, changeWidth }}>
      {children}
    </UsersContext.Provider>
  );
};

//! Consuming burada yaparsak ihtiyac duyan child larda bir daha cagirmiyoruz (opsiyoneldir, tercih edilmeyebilir, eski yoldan yani verileri cagiran sayfalara useContext yazarak devam edebilirsiniz.)
export const UsersContextComp = () => {
  return useContext(UsersContext);
};

export default UsersProvider;
