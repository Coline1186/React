import PropTypes from "prop-types";

function PokemonCard ({pokemon}){
  
  return (
      <figure>
          {pokemon.imgSrc ? <img></img> : <p>???</p>}
          <img src = {pokemon.imgSrc}></img>
          <figcaption><h1>{pokemon.name}</h1></figcaption>
      </figure>
      );
}
PokemonCard.protoTypes = {
    pokemonList : PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
}
export default PokemonCard;