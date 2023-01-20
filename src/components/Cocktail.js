import CocktailItem from './CocktailItem';
import { useState } from 'react';
import axios from 'axios';

const Cocktail = () => {

    const [ cocktailData, setCocktailData ] = useState({});

    const handleClick = () => {
        axios({
        url: "https://thecocktaildb.com/api/json/v1/1/random.php"  
        })    
        .then( (data) => {
            console.log(data)
            setCocktailData(data.data.drinks[0])
        })
    }

    return (
        <>
            <CocktailItem cocktailData={cocktailData}/>
            <button className="randomButton" onClick= { handleClick } >Surprise Me</button>
        </>
    )
}

export default Cocktail;