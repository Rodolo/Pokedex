import { PokeCard } from './PokeCard'
import { PokeSearch } from './PokeSearch'
import { PokeInfo } from '../PokeInfo'
import { usePokemon } from '../../hooks/usePokemon'
import { PokeLeftHeader } from './PokeLeftHeader'
import { PokeLoadingMessage } from '../PokeLoadingMessage'

export const PokeLeftWrapper = () => {
  const {  loadingPokemon } = usePokemon();

  return (
    <div className="col bg-metalic-red border-black ">

        <PokeLeftHeader/>
                    
        <PokeInfo>
            {() => (
                <>
                    {
                        loadingPokemon && 
                        <PokeLoadingMessage/>
                    } 
                    <PokeCard/>  
                </>                         
            )}
        </PokeInfo>
  
        <PokeSearch/>
       
    </div>
  )
}
