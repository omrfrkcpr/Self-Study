import React from "react";
import MainUser from "./MainUser";
import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const Names = () => {
  const { users, changeWidth } = useContext(UsersContext);

  return (
    <div>
      {/* diziden 4 kişinin ismini bastir */}
      {users.slice(0, 4).map((i) => (
        <div
          style={{ width: "100px", textAlign: "center", background: "pink" }}
        >
          {i.login}
        </div>
      ))}

      <MainUser users={users} changeWidth={changeWidth} />
    </div>
  );
};

export default Names;
