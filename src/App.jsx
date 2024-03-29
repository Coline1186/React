import PokemonCard from "./components/PokemonCard/PokemonCard";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        id: "bulbasaur",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        id: "charmander",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        id: "squirtle",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        id: "pikachu"
    },
    {
      name: "mew",
      id: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = (index) => {
    setPokemonIndex(index);
  };
  
  return (
  <div>
    <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
    <NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} handleClick={handleClick}/>
  </div>
  );
}

export default App;

