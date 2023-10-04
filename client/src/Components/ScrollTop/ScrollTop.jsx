import goUP from "../../goUp.png"
import Style from "./ScrollTop.module.css"

const GoUp = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Agregar un desplazamiento suave
      });
    return(
        <div onClick={GoUp}>
            <img class={Style.GoUp} src={goUP} alt="Subir arriba" />
        </div>
    )
      
}

export default GoUp;