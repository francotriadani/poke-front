import Style from "./card.module.css";

const Card = (props) => {
    return(
        <div class={Style.card}>
            <img class={Style.imagen} src={props.imagen} alt="imagen"></img>
            <p class={Style.name}>{props.nombre.charAt(0).toUpperCase() + props.nombre.substring(1)}</p>
            <div class={Style.tipe}>{props.tipo.map(t=> t.charAt(0).toUpperCase() + t.substring(1)).join(' - ')}</div>
            

            <br></br>
        </div>
    )
}

export default Card;