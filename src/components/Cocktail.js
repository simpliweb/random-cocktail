import { useState } from 'react';
import axios from 'axios';
import CocktailItem from './CocktailItem';
import FavoriteCocktail from './FavoriteCocktail';

const Cocktail = () => {

    const [ cocktailData, setCocktailData ] = useState({});

    const handleClick = () => {
        axios({
        url: "https://thecocktaildb.com/api/json/v1/1/random.php"  
        })    
        .then( (data) => {
            setCocktailData(data.data.drinks[0])
        })
    }

    return (
        <>
            <CocktailItem cocktailData={cocktailData}/>
            <button className="randomButton" onClick= { handleClick } >Surprise Me</button>
            <footer>
                <a className="footer" href="https://junocollege.com/">Created at Juno</a>
            </footer>            
            <FavoriteCocktail cocktailData={cocktailData}/>                  
        </>
    )
}

export default Cocktail;