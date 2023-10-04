import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_ID = "GET_POKEMON_ID"
export const GET_TYPES = "GET_TYPES"
export const FILTER_POKEMONS_TYPE = "FILTER_POKEMONS_TYPE"
export const FILTER_FROM = "FILTER_FROM"
export const ORDER_NAME = "ORDER_NAME"
export const ORDEN_ATAQUE = "ORDEN_ATAQUE"
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"


export const getPokemons = ()=>{
    return async function(dispatch) {
        const apiData = await axios.get("http://localhost:3001/pokemons")
        const pokemons = apiData.data;
    dispatch({
        type: GET_POKEMONS, 
        payload: pokemons,
        detail:[],
    })}
};

export function getTypes() {
    return async function (dispatch) {
      let types = await axios.get("http://localhost:3001/types", {});
  
      return dispatch({
        type: GET_TYPES,
        payload: types.data,
      });
    };
};

export function filterForType(payload) {
  return {
    type: FILTER_POKEMONS_TYPE,
    payload: payload,
  };
};

export function filterFrom(payload) {
  return {
    type: FILTER_FROM,
    payload: payload,
  };
};

export function orderName(payload) {
  return {
    type: ORDER_NAME,
    payload: payload,
  };
}

export function ordenAtaque(payload){
  return {
    type: ORDEN_ATAQUE,
    payload:payload
  }
}


export function getPokeName(nombre) {
  return async function (dispatch) {
    try {
      const pokeName = await axios.get(`http://localhost:3001/pokemons?nombre=${nombre}`
      );
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: pokeName.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postPokemon(pokemon) {
  try {
    return function (dispatch) {
      return axios.post("http://localhost:3001/pokemons", pokemon);
    };

  } catch (error) {
      console.log(error);
      return "Algo salio mal, intente de nuevo";
    }
}

export function getPokeId(idPokemon) {
  return async function (dispatch) {
    try {
      const pokeId = await axios.get(`http://localhost:3001/pokemons/${idPokemon}`);
  

      return dispatch({
        type: GET_POKEMON_ID,
        payload: pokeId.data,
      });
    } catch (error) {
      console.log('error');
    }
  };
}

export function deletePokemon(idPokemon){
  return async function(dispatch){
     try {
    return axios.delete("http://localhost:3001/pokemons/"+idPokemon)
  } catch (error) {
    console.log(error)
  }
  } 
}

export function putPokemon(pokemon) {
  const {id} = pokemon
  try {
    return function (dispatch) {
      return axios.put(`http://localhost:3001/pokemons/${id}`, pokemon);
    }
    
  } catch (err) {
    console.log(err);
    return `Algo salio mal, intente de nuevo: ${err}`;
  }
}