import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPokeId } from "../../Components/Redux/Actions"
import { useEffect } from "react"
import Style from "../Detail/Detail.module.css"


export default function Detail(props) {
    
    const dispatch = useDispatch()
    const idPokemon = props.match.params.id

    useEffect(() => {
        dispatch(getPokeId(idPokemon))
    }, [dispatch])

    const pokemonID = useSelector((state) => state.detail)

    return (
        <div>
            <div>
            </div>
            {pokemonID.length >= 1 ? 
            
            <div class={Style.flexbox}>

                <div className={Style.imagen}>
                    <img src={pokemonID[0].imagen} alt="Imagen pokemon" />
                </div>
                
                <div className={Style.detalles}>                    
                        <h1 className={Style.h1} >{pokemonID[0].nombre.charAt(0).toUpperCase() + pokemonID[0].nombre.substring(1)}</h1>
                        <h2>#{pokemonID[0].id}</h2>
                        <h5 className={Style.tipo} >Tipo : {pokemonID[0].tipo.map(t => t.charAt(0).toUpperCase() + t.substring(1)).join(' - ')}</h5>
                        <h5>Vida: {pokemonID[0].vida}</h5>
                        <h5>Defensa: {pokemonID[0].defensa}</h5>
                        <h5>Ataque: {pokemonID[0].ataque}</h5> 
                        <h5>Velocidad: {pokemonID[0].velocidad}</h5>
                        <h5>Altura: {pokemonID[0].altura} mts.</h5>
                        <h5>Peso: {pokemonID[0].peso} Kgs.</h5>
                </div>
                
            </div> 
            
            
            : <div >Tupokemon no quiere mostrarse</div>
            }

        </div>
    )


}
