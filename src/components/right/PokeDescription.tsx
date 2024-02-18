import { useEffect } from 'react';
import { usePokemon } from '../../hooks/usePokemon';

export const PokeDescription = () => {

  const { pokemon, descriptionData, calculateRealWeight, getPokemonDescription, isDescriptionLoaded, isPokemonLoaded } = usePokemon();

  useEffect(() => {
    if(!isDescriptionLoaded() && isPokemonLoaded()){ 
      getPokemonDescription(pokemon.species.url);
    }
  }, [pokemon]);
  

  return (
    <>
            <div className="col overflow-auto animate__animated animate__fadeIn">
                <div className="card-body">             
                    <div className="d-flex justify-content-center">
                        <h2 className="card-title fw-bold">{descriptionData.name}</h2>   
                    </div>                                        
                    <div className="d-flex my-3">
                          <div className="col d-flex justify-content-center align-items-center">
                            <span>
                              <h4>{pokemon.types.length > 1 ? 'Tipos' : 'Tipo'}: </h4>
                            </span>
                            {
                              pokemon.types.map(elem => 
                                <div className='ms-3 type-icon-size' key={elem.slot}>
                                  <img className={`type ${elem.type.name}`} key={elem.slot} src={`/assets/${elem.type.name}.svg`} alt={elem.type.name} title={elem.type.name}/>
                                </div>)
                            }
                          </div>                       
                    </div>

                    <div className="card">



                    <div className="d-flex justify-content-center my-2">

                       <div className="col d-flex justify-content-center">
                            <span className='fw-bold'> 
                                <h6>
                                    Num. pokedex: {descriptionData.order}
                                </h6>
                              </span>  
                            </div>
                            <div className="col d-flex justify-content-center">
                              <span>
                                <h6>
                                    Habitat: {descriptionData.habitat}
                                </h6>
                                </span>
                            </div>                    
                      </div>
                      <div className="row align-items-center my-2">
                            <div className="col d-flex justify-content-center">
                              <span>
                                  <h6>
                                    Color: {descriptionData.color}
                                  </h6> 
                              </span>
                            </div>
                            <div className="col d-flex justify-content-center">
                              <span>
                                <h6>
                                    Peso: {calculateRealWeight(pokemon.weight)} kg
                                </h6>
                            </span>
                            </div>
                      </div> 
                      
                    </div>         
                    <hr />   
                    <div className="my-3">
                      <p>{descriptionData.description}</p>
                    </div>
                    <hr />                
                </div>  
            </div>
    </>
  )
}
