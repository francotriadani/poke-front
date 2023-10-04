import Style from "./cardscontainer.module.css"
import Card from "../Card/card"
import { useSelector , useDispatch } from "react-redux"
import { useState } from "react"
import next from "../IMG/next.png"
import prev from "../IMG/prev.png"
import {Link} from "react-router-dom"
import { orderName } from "../Redux/Actions"


const CardsContainer = ()=>{
 
  const pokemons = useSelector(state=>state.pokemons)
  const [page, setPage] = useState(0);
  const [orden, setOrden] = useState('');

  const pagination = () => {
    if (pokemons.length) return pokemons.slice(page, page + 12);
    if (pokemons.info) return pokemons;
    return [];
  };
  
  //const array = pagination();
  

  const nextPage = () => {
    if (pokemons.length > page + 12) {
      setPage(page + 12);
    }
  };

  const previusPage = () => {
    if (page > 0) {
      setPage(page - 12);
    }
  };

  const dispatch = useDispatch()

    const ordenamiento = (e =>{
        e.preventDefault();
        const nuevaOrden = e.target.value;
        dispatch(orderName(nuevaOrden));
        setOrden(nuevaOrden);
        setPage(0);
    });

    return(
    <div>
      <div>
      <div>
              <select onChange={(e)=>ordenamiento(e)}>
                <option disabled selected defaultValue>
                  Order
                </option>
                <option value="numerico">Numerico</option>
                <option value="nombreAz">A - Z</option>
                <option value="nombreZa">Z - A</option>
              </select>
            </div>

      </div>
      <div>
        <a onClick={previusPage}><img class={Style.prev} src={prev} alt="Previous" ></img></a>
        <a> {(page + 12)/12} </a>
        <a onClick={nextPage}><img class={Style.next} src={next} alt="Next"></img></a>
        <p></p>
      </div>
        <div class={Style.container}>
          {pagination(pokemons).map((pokemon)=>{
            return(
            <Link key={pokemon.id} to={`/detail/${pokemon.id}`}>
              <div>
                <Card
                  id={pokemon.id}
                  nombre={pokemon.nombre}
                  imagen={pokemon.imagen}
                  tipo={pokemon.tipo}
                />
                </div>
            </Link>)
          })}
        </div> 
    </div>
    )
}

export default CardsContainer;