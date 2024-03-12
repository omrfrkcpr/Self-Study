import React from "react";
import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/omrfrkcpr"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <h2 className="brand">{"Omrfrkcpr"}</h2>
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <span>Copyright &copy;</span>
    </div>
  );
};

export default Footer;
