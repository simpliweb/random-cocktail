const FavoriteCocktail = ({cocktails, cocktailData}) => {    
    return (
        <>          
            <div className="savedCocktail">
                {
                    cocktails.map((cocktail) => {
                            return <div className="savedCocktailContent">
                                    <h1 className="savedCocktailName"> {cocktail.title} </h1>
                                    <img className="savedCocktailImage"src = {cocktail.image} alt = {cocktailData?.strDrinkThumb} />
                                    <p className=""> {cocktail.instructions} </p>
                                </div>                          
                            })
                }
            </div>
        </>
    )
}
export default FavoriteCocktail;