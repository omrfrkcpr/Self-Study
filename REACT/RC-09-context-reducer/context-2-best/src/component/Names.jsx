import React from "react";
import MainUser from "./MainUser";
import { UsersContextComp } from "../context/UsersProvider";

const Names = () => {
  const { users } = UsersContextComp();
  return (
    <div>
      {/* diziden 4 kişinin ismini bastir */}
      {users.slice(0, 4).map((i) => (
        <div
          style={{ textAlign: "center", width: "100px", background: "pink" }}
        >
          {i.login}
        </div>
      ))}

      <MainUser users={users} />
    </div>
  );
};

export default Names;
