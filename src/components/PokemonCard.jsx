import PropTypes from "prop-types";

function PokemonCard ({pokemon}){
  
  return (
    <figure>
        {pokemon.imgSrc ? <img src = {pokemon.imgSrc}></img> : <p>???</p>}      
        <figcaption><h1>{pokemon.name}</h1></figcaption>
    </figure>
    );
}
PokemonCard.propTypes = {
    pokemon : PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
}
export default PokemonCard;