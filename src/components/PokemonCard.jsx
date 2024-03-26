function PokemonCard ({pokemon}){
  
  return (
      <figure>
          {pokemon.imgSrc ? <img></img> : <p>???</p>}
          <img src = {pokemon.imgSrc}></img>
          <figcaption><h1>{pokemon.name}</h1></figcaption>
      </figure>
      );
}
export default PokemonCard;