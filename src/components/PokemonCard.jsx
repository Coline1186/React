function PokemonCard ({pokemon}){
  
  return (
      <figure>
          {pokemon.imgSrc ? <img src = {pokemon.imgSrc}></img> : <p>???</p>}      
          <figcaption><h1>{pokemon.name}</h1></figcaption>
      </figure>
      );
}
export default PokemonCard;