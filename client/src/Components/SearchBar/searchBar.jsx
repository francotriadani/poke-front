import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { getPokeName } from "../Redux/Actions";
import Style from "../SearchBar/searchBar.module.css"

const SearchBar = ()=>{
    
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handlerInput(e) {
        e.preventDefault()
        setName(e.target.value)
        dispatch(getPokeName(name))
    }

    function handlerSubmit(e){
        e.preventDefault()
        dispatch(getPokeName(name))
        setName("")
    }

    return (
        <div>

            <input class={Style.input}
                onChange={(e)=> handlerInput(e)}
                type="text"
                placeholder="Encuentra tu Pokemon"
            />

            <button class={Style.buscar} 
            onClick={(e)=>handlerSubmit(e)}
            type="submit"
            >Buscar</button>


        </div>
    )

}

export default SearchBar;