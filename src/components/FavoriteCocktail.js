import firebase from '../firebase';
import { useState, useEffect } from "react";
import { onValue, ref, getDatabase, remove, push } from 'firebase/database';
// import CocktailItem from './CocktailItem';


const FavoriteCocktail = () => {

    console.log('favoriteCocktail is running');

    const [ cocktail, setCocktails ] = useState([]);

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);

        // onValue(dbRef, (dbResponse) => {

        // const dbValue = dbResponse.val();
        //     console.log(dbValue);    
        // })
        
    },[])
    return (
        
            <h1>hello</h1>
        
    )
}
export default FavoriteCocktail;