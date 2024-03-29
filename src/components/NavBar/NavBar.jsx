function NavBar ({pokemonList, handleClick}) {
    
    
    return(
        <div className="li">
            {pokemonList.map((pokemonList, index) => (
            <li key={pokemonList.id}>
            <button onClick={() => handleClick(index)}>{pokemonList.name}</button>
            </li>
        ))}
        </div>
    )
}

export default NavBar