import PropTypes from "prop-types";

function PokemonCard (props){
  
  return (
      <figure>
          {props.pokemon.imgSrc ? <img src = {props.pokemon.imgSrc}></img> : <p>???</p>}
          <figcaption><h1>{props.pokemon.name}</h1></figcaption>
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