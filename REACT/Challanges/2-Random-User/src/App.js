import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState(null);
  const [activeIcon, setActiveIcon] = useState(0);
  const [addedUsers, setAddedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const url = "https://randomuser.me/api/";
  const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

  const fetchUserData = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.data.results.length > 0) {
          setUserData(response.data.results[0]);
          setDisabled(false);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleNewUser = () => {
    setActiveIcon(0);

    fetchUserData();
  };

  const handleAddUser = () => {
    if (!addedUsers.find((x) => x.login.uuid === userData.login.uuid)) {
      setAddedUsers([...addedUsers, userData]);
    } else {
      setDisabled(true);
    }
  };

  const icons = (data) => [
    {
      svg: data.gender === "male" ? manSvg : womanSvg,
      key: "name",
      value: `${data.name.first} ${data.name.last}`,
    },
    { svg: mailSvg, key: "mail", value: data.email },
    {
      svg: data.gender === "male" ? manAgeSvg : womanAgeSvg,
      key: "age",
      value: data.dob.age,
    },
    {
      svg: mapSvg,
      key: "street",
      value: `${data.location.street.number} ${data.location.street.name}`,
    },
    { svg: phoneSvg, key: "phone number", value: data.cell },
    { svg: padlockSvg, key: "password", value: data.login.password },
  ];

  const IconRenderer = ({ svgIcon, iconIndex }) => (
    <button className="icon" onMouseEnter={() => setActiveIcon(iconIndex)}>
      <img src={svgIcon.svg} alt={svgIcon.key} id="iconImg" />
    </button>
  );

  if (!userData) return null;

  const iconData = icons(userData);

  return (
    <main>
      <div className="block bcg-orange"></div>
      <div className="block">
        <div className="container">
          <img
            src={userData.picture.large}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {iconData[activeIcon].key} is</p>
          <p className="user-value">{iconData[activeIcon].value}</p>
          <div className="values-list">
            {iconData.map((icon, index) => (
              <IconRenderer svgIcon={icon} iconIndex={index} />
            ))}
          </div>
          <div className="btn-group">
            {loading ? (
              <button className="btn" type="button">
                Loading...
              </button>
            ) : (
              <button onClick={handleNewUser} className="btn" type="button">
                new user
              </button>
            )}

            <button
              disabled={disabled}
              onClick={handleAddUser}
              className="btn"
              type="button"
            >
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {addedUsers.map((user) => (
                <tr className="body-tr">
                  <td>
                    {user.name.first}
                    {user.name.last}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.cell}</td>
                  <td>{user.dob.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
