import { PokeRightWrapper } from '../components/right/PokeRightWrapper'
import { PokeLeftWrapper } from '../components/left/PokeLeftWrapper'

export const Pokedex = () => {

  return <>
          <div className="row pokedex-height pokedex-width ">
              <PokeLeftWrapper/>
              <PokeRightWrapper/>
              <div className="col-1 no-padding">
                <div className='height-20'/>
                <div className='height-80 left-border-black'/>
              </div>
          </div>
       
        </>
}
