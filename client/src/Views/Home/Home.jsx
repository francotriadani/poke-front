import CardsContainer from "../../Components/CardsContainer/cardscontainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../Components/Redux/Actions";
import GoUp from "../../Components/ScrollTop/ScrollTop";



const Home = ()=>{
     
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    })

    return(
        <div>
            <h1>
            <CardsContainer></CardsContainer>
            <br></br>
            <GoUp></GoUp>
            </h1>

        </div>
        
        
    )
}

export default Home;