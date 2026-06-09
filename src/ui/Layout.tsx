import { usePokemon } from '../hooks/usePokemon';
import { Pokedex } from './Pokedex';

export const Layout = () => {

  const { errorMessage } = usePokemon();

  return  <>
    
  

        <div className='container-fluid'>   

          <div className="row justify-content-center">

              <div className='top-header text-center align-items-center'>
              {
                errorMessage !== undefined && <div className='d-flex justify-content-center'><span className='text-danger fw-bold'><h2>{errorMessage}</h2></span></div>   
              }
              </div>
              <Pokedex/>
          </div>
        </div>
       


    </>
}
