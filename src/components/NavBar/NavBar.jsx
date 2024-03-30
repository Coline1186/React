
function NavBar ({pokemonList, handleClick}) {
    const handleClickPika = (index) => {
        index === 3 ? (alert("pika pikachu !!!"), handleClick(index)) : handleClick(index);
    };

    return(
        <div className="li">
            {pokemonList.map((pokemonList, index) => (
            <li key={pokemonList.id}>
            <button onClick={() => handleClickPika(index)}>{pokemonList.name}</button>
            </li>
        ))}
        </div>
    )
}

export default NavBar