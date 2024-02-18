import { PokeInfoProps } from '../types/types';

export const PokeInfo = ({children}: PokeInfoProps) => {

  return <>        
            <div className="my-5">
               <div className="d-flex justify-content-center align-items-center">
                  <div className="card card-size gold-border"> 
                        {
                           children()
                        }         
                  </div>
               </div>
            </div>
  </>
}
