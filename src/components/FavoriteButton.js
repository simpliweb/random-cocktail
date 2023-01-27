// import FavoriteCocktail from './FavoriteCocktail';

const FavoriteButton = ({handleClick}) => {
    return (
        <>
            {/* <div className="favoriteButtonContainer"> */}
                <button className="favorite" onClick = {handleClick}>
                    <i className="fa-regular fa-heart"></i>
                </button>
            {/* </div>           */}
        </>
    )
}

export default FavoriteButton;