import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/anthonyharold67"
        target="_blank"
        rel="noopener noreferrer"
        
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"<Anthony/> "}</code>
        
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <span
        >Copyright {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;