import { GET_POKEMONS,GET_POKEMON_ID, GET_TYPES,FILTER_POKEMONS_TYPE,FILTER_FROM,ORDER_NAME,ORDEN_ATAQUE,GET_POKEMON_NAME} from "./Actions";

const initialState = {
    pokemons: [],
    allpokemons: [],
    types: [],
    detail: [],
}


const rootReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allpokemons:action.payload,
                detail: [],
            }
        case GET_POKEMON_ID:
            return {
              ...state,
              detail: action.payload,
            };
        

        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            }

        case FILTER_POKEMONS_TYPE:
            const pokeTotal = state.allpokemons;
            const pokemonesfilter =
                action.payload === "Todos"
                ? pokeTotal
                : pokeTotal.filter((poke) => poke.tipo.includes(action.payload));
            return {
                ...state,
                pokemons: pokemonesfilter,
            }

        case FILTER_FROM:
            if (action.payload === "todos")
                return {
                ...state,
                pokemons: state.allpokemons,
                };
            const pokeFiltrados =
                action.payload === "creados"
                ? state.allpokemons.filter((poke) => poke.creadoDb === true)
                : state.allpokemons.filter((poke) => !poke.creadoDb);
            return {
                ...state,
                pokemons: pokeFiltrados,
            };

        case ORDER_NAME:

            let ordenados = [];
            if (action.payload === "numerico"){
                ordenados = state.pokemons.sort(function(a,b){
                    if(a.id > b.id){
                        return 1;
                    }
                    if (a.id < b.id){
                        return -1;
                    }
                })
            }
            if (action.payload === "nombreAz") {
                ordenados = state.pokemons.sort(function (a, b) {
                if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                    return 1;
                }
                if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                    return -1;
                }
                return 0;
                });
            }
            if (action.payload === "nombreZa") {
                ordenados = state.pokemons.sort((a, b) => {
                if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                    return -1;
                }
                if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                    return 1;
                }
                return 0;
                });
            }
        
            return {
                ...state,
                pokemons: ordenados,
            };

        case ORDEN_ATAQUE:
            let orden = [];
            if (action.payload === "ataqueAz") {
                orden = state.pokemons.sort(function (a, b) {
            if (parseInt(a.ataque) > parseInt(b.ataque)) {
                return 1;
            }
            if (parseInt(a.ataque) < parseInt(b.ataque)) {
                return -1;
            }
                return 0;
            });
            }

            if (action.payload === "ataqueZa") {
                orden = state.pokemons.sort((a, b) => {
                if (parseInt(a.ataque) > parseInt(b.ataque)) {
                    return -1;
                }
                if (parseInt(a.ataque) < parseInt(b.ataque)) {
                    return 1;
                }
                return 0;
                });
            }

            return {
                ...state,
                pokemons: orden,
            };

        case GET_POKEMON_NAME:
            return {
                ...state,
                pokemons: action.payload,
            };

        case "POST_POKEMON":
            return {
                ...state,
            };

        case "DELETE_POKEMON":
            return {
                ...state,
            };
        
            
        default:
            return{...state}
    }

}


export default rootReducer;