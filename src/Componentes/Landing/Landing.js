import {Link} from 'react-router-dom';
import "./Landing.css"
import Boton from "../Boton";

const Landing =()=>{
  return (
      <div className="start">
         <Link to="/home">
            <img src="../img/aluraflix.png" alt="logo aluraflix"/>
         </Link>
         <Link to="/home">
            <Boton>Iniciar</Boton>
         </Link>
         
      </div>
   ) 
}
export default Landing;