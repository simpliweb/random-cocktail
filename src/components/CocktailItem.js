import firebase from '../firebase';
import { useState, useEffect } from 'react';
import { onValue, ref, getDatabase, push } from 'firebase/database';


const CocktailItem = ( props ) => {
    console.log(props)

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
            console.log(dbValue);
       
            const arrayOfCocktails = [];

            for (let propertyKey in dbValue) {
                console.log(dbValue[propertyKey])
        
                arrayOfCocktails.push({
                    title: dbValue[propertyKey].strDrink,
                    image: dbValue[propertyKey].strDrinkThumb,
                    instructions: dbValue[propertyKey].strInstructions    
                });
            }               
            setCocktails(arrayOfCocktails);
        });
    },[])


        return (
            <>
            <section className="wrapper">
                <div className="cocktailContainer">              
                    <div className="cocktailInfo">
                        <div className="cocktailImageContainer"> 
                            <img className="cocktailImage" src= { props?.cocktailData?.strDrinkThumb } /> 
                        </div>
                        <div className="cocktailDetails">
                            <div className="cocktailTitle">
                                <h2 className="cocktailName"> { props?.cocktailData?.strDrink } </h2>
                                <button className="favorite" onClick = { handleClick }>
                                    {
                                        isVisible
                                        ? <i class="fa-solid fa-heart"></i>
                                        : <i class="fa-regular fa-heart"></i>
                                    }
                                </button>
                            </div>
                            {/* <p className="cocktailIngredients"> {props?.cocktailData?.strIngredient} </p> */}
                            <p className="cocktailInstructions"> { props?.cocktailData?.strInstructions }</p>
                        </div>   
                    </div>             
                </div>            
            </section>

            <div>
                {
                    cocktails.map( (cocktail) => {
                            return <div>
                                    <h1>{cocktail.title}</h1>
                                    <img src={cocktail.image} />
                                    <p>{cocktail.instructions}</p>
                                </div>                          
                            })
                }
            </div>                
        </>
        )
    
}
export default CocktailItem;