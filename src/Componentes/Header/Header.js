import { Link } from "react-router-dom";
import Boton from "../Boton";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/home">
        <img alt="Logo aluraflix" src="../img/logo.png" />
      </Link>

      <div>
        <Link to="/nuevo">
          <Boton>Nuevo Video</Boton>
        </Link>
      </div>
    </div>
  );
};
export default Header;
