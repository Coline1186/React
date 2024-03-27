import PokemonCard from "./components/PokemonCard/PokemonCard";
import NavBar from "./components/NavBar/NavBar";
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
    <NavBar handleClickPrecedent={handleClickPrecedent} handleClickSuivant={handleClickSuivant} pokemonList={pokemonList} pokemonIndex={pokemonIndex}/>
  </div>
  );
}

export default App;

