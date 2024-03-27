import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrecedent = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleClickSuivant = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  
  return (
  <div>
    <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
    <p>{pokemonIndex}</p>
    {pokemonIndex > 0 ? <button onClick={handleClickPrecedent}>Précédent</button> : false}
    {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickSuivant}>Suivant</button> : false}
  </div>
  );
}

export default App;

