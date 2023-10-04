import {Link} from "react-router-dom";
import Style from "..//Landing/landing.module.css"
import Imagen from "../../Components/IMG/landing.jpg"
import Catch from "..//..//Components/IMG/catch.png"


const Landing = ()=>{
    return(
        
            <div>
                <img className={Style.img} src={Imagen} alt="Imagen Fondo"></img>
                <Link  to="/home"><img className={Style.Catch} src={Catch} alt="ingresa"></img></Link>

            </div>
       
    )
}

export default Landing;