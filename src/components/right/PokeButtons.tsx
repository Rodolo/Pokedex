import { usePokemon } from '../../hooks/usePokemon';
import { PokeButtonsProps } from '../../types/types';

export const PokeButtons = ({props}:PokeButtonsProps) => {

  const { isPokemonLoaded } = usePokemon();

  const onDescriptionClick = () => {
    props.onSetDescriptionActive()
  }

  const onMovementClick = () => {
    props.onSetMovementActive();
  }

  return (
    <>
        <div className='my-5'>
        {/* { isPokemonLoaded() && */}
            <div className='my-3 d-flex justify-content-center'>
             
                <button disabled={!isPokemonLoaded() || props.isDescriptionActive} onClick={onDescriptionClick} className="mx-4 btn btn-secondary text-white">
                   Descripción
                </button>

                <button  disabled={!isPokemonLoaded() || props.isMovementActive} onClick={onMovementClick}  className="btn btn-secondary text-white">
                  Movimientos
                </button>

            </div>
          {/* } */}
        
        </div>
    </>
  )
}
