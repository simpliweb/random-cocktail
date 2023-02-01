// FavoriteButton is the heart button to save favotie cocktail, onclick = handleClick to push current visible cocktail/title/instruction to save into the firebase
const FavoriteButton = ({handleClick}) => {
    return (
        <>
                <button className="favorite" onClick={handleClick}>
                    <i className="fa-regular fa-heart"></i>
                </button>
        </>
    )
}

export default FavoriteButton;