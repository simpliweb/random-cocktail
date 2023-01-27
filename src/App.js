import './App.css';
import Header from './components/Header';
import  CocktailItem from './components/CocktailItem';
import firebase from './firebase';
import axios from 'axios';
import {useState, useEffect} from "react";
import {onValue, ref, getDatabase, push} from 'firebase/database';
import FavoriteCocktail from './components/FavoriteCocktail';


// const Cocktail = () => {
  const App = () => {

    const [cocktailData, setCocktailData] = useState({});

    // onclick of 'randombutton' api call from cocktail api and show specific part of the data on page
    const pressClick = () => {
        axios({
        url: "https://thecocktaildb.com/api/json/v1/1/random.php"  
        })    
        .then((data) => {
            setCocktailData(data.data.drinks[0])
        })
        .catch((error) => {
            console.log(error)
        });
    }

    const [cocktails, setCocktails] = useState([]);

    // pushing current random cocktail into firebase
    const handleClick = () => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        push(dbRef, cocktailData)        
    }

    // database is ready at onload, save specific data to useState
    useEffect(() => {
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
// function App() {
  return (
    <>
      <Header />
      <CocktailItem cocktailData={cocktailData}/>
      <button className="randomButton" onClick={pressClick}>Surprise Me</button>
      <footer>
          <a className="footer" href="https://junocollege.com/">Created at Juno</a>
      </footer>            
      <FavoriteCocktail cocktailData={cocktailData} handleClick={handleClick} cocktails={cocktails}/>     
    </>
  );
}

export default App;