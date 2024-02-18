import { useEffect } from 'react'
import { usePokemon } from '../../hooks/usePokemon';

export const PokeMovements = () => {

  const { pokemon, movementsData, getEspName, getPokemonMoves, isMovementLoaded, isPokemonLoaded } = usePokemon();

  useEffect(() => {
    if(!isMovementLoaded() && isPokemonLoaded()){ 
      getPokemonMoves(pokemon.moves);
    }
  }, [pokemon]);

  return (
    <div className="row height-100 align-items-center overflow-auto animate__animated animate__fadeIn">
        <div className='col'>


          { 
               movementsData.map((movement, index) => index % 2 === 0 && 
                <div key={movement.id} className="d-flex justify-content-center align-items-center">                  
                      <h6 className=''> {getEspName(movement.names)} </h6>    
                      <div className='ms-2 type-icon-size'>
                          <img className={`type ${movement.type.name}`} src={`/assets/${movement.type.name}.svg`} alt={movement.type.name} title={movement.type.name}/>
                      </div>                 
                
                </div>
               )
            }   

        </div>


        <div className="col">

      
            { 
               movementsData.map((movement, index) => index % 2 !== 0 && 
               <div key={movement.id} className="d-flex justify-content-center align-items-center">                  
                    <h6 className=''> {getEspName(movement.names)} </h6>    
                    <div className='ms-2 type-icon-size'>
                        <img className={`type ${movement.type.name}`} src={`/assets/${movement.type.name}.svg`} alt={movement.type.name} title={movement.type.name}/>
                    </div>                 
              
              </div>
               )
            }
        </div>
    </div>
  )
}
