import { useEffect, useState } from 'react'
import { PokeInfo } from '../PokeInfo'
import { PokeButtons } from './PokeButtons';
import { PokeDescription } from './PokeDescription';
import { usePokemon } from '../../hooks/usePokemon';
import { PokeMovements } from './PokeMovements';
import { PokeRightHeader } from './PokeRightHeader';
import { PokeLoadingMessage } from '../PokeLoadingMessage';

export const PokeRightWrapper = () => {

  const { pokemon, loadingDescription, loadingMovements, isMovementLoaded, isDescriptionLoaded, isPokemonLoaded } = usePokemon();
  const [ isDescriptionActive, setIsDescriptionActive ] = useState(false);
  const [ isMovementActive, setIsMovementActive ] = useState(false);

  const onResetState = () => {
    setIsDescriptionActive(false);
    setIsMovementActive(false);
  }

  const onSetDescriptionActive = () => {
    setIsDescriptionActive(true);
    setIsMovementActive(false);
  }

  const onSetMovementActive = () => {
    setIsDescriptionActive(false);
    setIsMovementActive(true);
  }


  useEffect(() => {
    if(isPokemonLoaded()){
        onSetDescriptionActive();
    }else{
        onResetState();
    }
  }, [pokemon])
  

  return (
    <div className="col border-black-notop bg-metalic-red ">
       
        <PokeRightHeader/>
      
        <PokeInfo>
            {() => (
                <>          
                    {
                    (isPokemonLoaded() && (loadingDescription  || loadingMovements)) && 
                      <PokeLoadingMessage/>
                        
                    }

                    {
                    (isDescriptionActive && !loadingDescription) && 
                        <PokeDescription/>   
                    } 

                    {
                    (isMovementActive && !loadingMovements) && 
                        <PokeMovements/>   
                    }                 
                </>                 
            )}
        </PokeInfo>
    
        <PokeButtons props={{isDescriptionActive, isMovementActive, onSetDescriptionActive, onSetMovementActive}}/>
      
    </div>
  )
}
