// import RandomCocktail from './RandomCocktail';
import { useEffect } from 'react';


// import axios from 'axios';

const Cocktail = () => {

     useEffect( () => {
        console.log ('side effect is running 🏃‍♀️')        

        const url = new URL('https://thecocktaildb.com/api/json/v1/1/random.php');
        
        url.search = new URLSearchParams({
            name: 'strDrink',
            image: 'strDrinkThumb',
            instruction: 'strInstructions'            
        })
        
        fetch(url)
            .then( (response) => {
                return response.json()
            })
            .then( (data) => {
                console.log(data)

            })
    }, []);
}

export default Cocktail;