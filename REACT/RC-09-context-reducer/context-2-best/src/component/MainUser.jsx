import React from "react";
import { UsersContextComp } from "../context/UsersProvider";

const MainUser = ({ users }) => {
  const { changeWidth } = UsersContextComp();
  return (
    <div>
      {users.map((i) => {
        const { login, avatar_url, width, id } = i;
        return (
          <div key={id} style={{ textAlign: "center" }}>
            <h3>{login} </h3>
            <img src={avatar_url} alt={`${login}img`} width={width} />

            <div>
              <label htmlFor="width">Image width(px)</label>
              <input
                type="number"
                id="width"
                value={width}
                onChange={(e) => changeWidth(e.target.value, id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainUser;
