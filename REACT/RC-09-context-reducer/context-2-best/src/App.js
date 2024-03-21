import React from "react";
import ShowUsers from "./pages/ShowUsers";
import UsersProvider from "./context/UsersProvider";

const App = () => {
  return (
    <UsersProvider>
      <ShowUsers />
    </UsersProvider>
  );
};

export default App;
