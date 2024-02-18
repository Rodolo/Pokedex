import { usePokemon } from '../../hooks/usePokemon';

export const PokeCard = () => {
    
  const { pokemon, isPokemonLoaded } = usePokemon();

  return <>
        { 
                isPokemonLoaded() && 
                <img src={pokemon.sprite} className="height-100 card-img-top animate__animated animate__fadeIn" alt="..."/>
        }                           
                  
        </>
}
