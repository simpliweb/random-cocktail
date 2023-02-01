// loop through firebase and display each cocktail of image, title, and instructions
const FavoriteCocktail = ({cocktails}) => {        
    return (
        
        <>          
            <div className="savedCocktail">
                {
                    cocktails.map((cocktail) => {
                            return <div key={cocktail.key} className="savedCocktailContent">
                                    <h1 className="savedCocktailName"> {cocktail.title} </h1>
                                    <img className="savedCocktailImage"src = {cocktail.image} alt = {cocktail?.strDrinkThumb} />
                                    <p className=""> {cocktail.instructions} </p>
                                </div>                          
                            })
                }
            </div>
        </>
    )
}
export default FavoriteCocktail;