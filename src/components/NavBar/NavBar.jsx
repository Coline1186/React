
function NavBar ({handleClickPrecedent, handleClickSuivant, pokemonList, pokemonIndex}) {
   
    return(
        <>
        {pokemonIndex > 0 ? <button onClick={handleClickPrecedent}>Précédent</button> : false}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickSuivant}>Suivant</button> : false}
        </>
    )
}

export default NavBar