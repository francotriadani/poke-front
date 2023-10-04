import {Link} from "react-router-dom";
import SearchBar from "./SearchBar/searchBar";
import Logo from "./IMG/logo.png";
import LKD from "./IMG/lkd.png";
import Create from "./IMG/create.png"
import ToHome from "./IMG/tohome.png"
import Style from "../Components/NavBar.module.css"



const NavBar = ()=>{
    return(
        <nav>
            <div class={Style.navbar}>
                
                <img class={Style.logo} src={Logo} alt="PoKeMon Pi"></img>
                    
                    <ul class={Style.ul}>
                        <ul><Link  to="/home"><img class={Style.link} src={ToHome} alt="to Home"></img></Link></ul>
                        <ul><Link  to="/form"><img class={Style.link} src={Create} alt="Create"></img></Link></ul>
                        <ul><SearchBar/></ul>
                    </ul>
                
                <div>
                    <a href="https://www.linkedin.com/in/francotriadani/"><img class={Style.LKD} src={LKD} alt="Linkedin"></img></a>
                </div>
            </div>

        </nav>
    )
}

export default NavBar;