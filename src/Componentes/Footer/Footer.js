import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/home">
        <img alt="Logo aluraflix" src="../img/logo.png" />
      </Link>
    </div>
  );
};

export default Footer;
