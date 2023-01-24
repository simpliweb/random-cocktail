import firebase from '../firebase';
import { useState, useEffect } from "react";
import { onValue, ref, getDatabase, push } from 'firebase/database';

const FavoriteCocktail = ( props ) => {    

    const [ isVisible, setIsVisible ] = useState(false);
    const [ cocktails, setCocktails ] = useState([]);

    
    const handleClick = () => {
        setIsVisible(!isVisible);
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        push(dbRef, props.cocktailData)        
    }

    useEffect( () => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
         onValue(dbRef, (dbResponse) => {
          
            const dbValue = dbResponse.val();
       
            const arrayOfCocktails = [];

            for (let propertyKey in dbValue) {        
                arrayOfCocktails.push({
                    title: dbValue[propertyKey].strDrink,
                    image: dbValue[propertyKey].strDrinkThumb
                });
            }               
            setCocktails(arrayOfCocktails);
        });
    },[])

    return (
        <>
            <div className="favoriteButtonContainer">
                <button className="favorite" onClick = { handleClick }>
                    {
                        isVisible
                        ? <i class="fa-solid fa-heart"></i>
                        : <i class="fa-regular fa-heart"></i>
                    }
                </button>
            </div>

            <div className="savedCocktail">
                {
                    cocktails.map( (cocktail) => {
                            return <div className="savedCocktailContent">
                                    <h1 className="savedCocktailName">{cocktail.title}</h1>
                                    <img className="savedCocktailImage"src={cocktail.image} />
                                    <p className="">{cocktail.instructions}</p>
                                </div>                          
                            })
                }
            </div>
        </>
    )
}
export default FavoriteCocktail;