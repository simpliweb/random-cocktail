import FavoriteButton from "./FavoriteButton";

// display random cocktail item of image, title, and instruction
const CocktailItem = (props) => {   
    return (
        <section className="wrapper">
            <div className="cocktailContainer">              
                <div className="cocktailInfo">
                    <div className="cocktailImageContainer"> 
                        <img className="cocktailImage" src= {props?.cocktailData?.strDrinkThumb} alt = {props?.cocktailData?.strDrinkThumb}/> 
                    </div>
                    <div className="cocktailDetails">
                        <div className="cocktailTitle">
                            {props?.cocktailData?.strDrinkThumb && <FavoriteButton handleClick={props.handleClick} />}
                            <h2 className="cocktailName"> {props?.cocktailData?.strDrink} </h2>                              
                        </div>
                        <p className="cocktailInstructions"> {props?.cocktailData?.strInstructions}</p>
                    </div>   
                </div>             
            </div>            
        </section>    
    )
    
}
export default CocktailItem;