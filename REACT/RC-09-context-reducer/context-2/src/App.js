import { useEffect, useState } from "react";

import ShowUsers from "./pages/ShowUsers";
import { UsersContext } from "./context/UsersContext";

const App = () => {
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
      <ShowUsers />
    </UsersContext.Provider>
  );
};

export default App;
