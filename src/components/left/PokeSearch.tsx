import { useState } from "react";
import { usePokemon } from "../../hooks/usePokemon";

export const PokeSearch = () => {

  const { getPokemonByName } = usePokemon();
  const [ pokemonName, setPokemonName ] = useState<string>('');

  const onFormSubmit = (event:any) => {
    event.preventDefault();
    if(pokemonName)
       getPokemonByName(pokemonName);
  }

  const onInputChange = (event:any) => {
    setPokemonName(event.target.value);
  }

  return <>
    <div className="my-5">
        <form onSubmit={onFormSubmit}>
            <div className="d-flex justify-content-center">
                <input
                    type="text"
                    className="form-control pokesearch"
                    name="pokemon"
                    id="pokemon"
                    aria-describedby="helpId"
                    placeholder="Escribe el pokemon"
                    onChange={onInputChange}
                    value={pokemonName}
                />
            </div>
        </form>
    </div>
   
  </>
}
