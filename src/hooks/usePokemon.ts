import { useDispatch, useSelector } from "react-redux";
import pokeApi from "../api/pokeApi"
import { clearErrorMessage, clearPokemonData, setErrorMessage, setLoadingDescription, setLoadingMovements, setLoadingPokemon, setPokemon, setPokemonDescription, setPokemonMovements } from "../slice/pokeSlice";
import { RootState } from "../store/pokeStore";
import { FlavorTextEntriesType, LanguageType, MovementType } from "../types/types";
import { DATA_NOT_AVAILABLE, gameLanguage, initialDescriptionState, initialMovementsState, initialPokeState, movementObtainMethod } from "../utils/utils";


export const usePokemon = () => {
    const {pokemon, descriptionData, movementsData, loadingDescription, loadingMovements, loadingPokemon, errorMessage} = useSelector((state: RootState) => state.pokeState);
    const dispatch = useDispatch();

    const getPokemons = async() => {
        const response = await pokeApi.get("/api/v2/pokemon/");
        const {results} = response.data;
        dispatch(setPokemon(results));
    }


    const getPokemonByName = async (pokemonName:string) => {
        try {
          //  console.log('getPokemonByName', pokemonName);
            dispatch(clearPokemonData());
            dispatch(clearErrorMessage());
            dispatch(setLoadingPokemon(true));
            const { data } = await pokeApi.get(`/api/v2/pokemon/${pokemonName}`);
            const {sprites, species} = data;
            //console.log(data);
            dispatch(setPokemon({...data, subdata: species, sprite: sprites.other.dream_world.front_default}));
            dispatch(setLoadingPokemon(false));
        } catch (error:any) {
            console.log(error);
            // dispatch(setErrorMessage(error.message));
            dispatch(setErrorMessage('Error al buscar el pokemon'));
            dispatch(setLoadingPokemon(false));
        }
    }

    const getPokemonDescription = async(descriptionUrl:string) => {
        try {
            console.log('getPokemonDescription', descriptionUrl);
            dispatch(setLoadingDescription(true));
            let { data } = await pokeApi.get(descriptionUrl);
            console.log(data);
            const { color, habitat, names, flavor_text_entries} = data;
            let colorData = null;
            let habitatData = null;
            if(color){
                const { data } = await pokeApi.get(color.url);
                colorData = data;
            } 
            if(habitat){
                const { data } = await pokeApi.get(habitat.url);
                habitatData = data;
            } 
            dispatch(setPokemonDescription({
                order: data.order, 
                name: getEspName(names), 
                color: colorData ? getEspName(colorData.names) : DATA_NOT_AVAILABLE, 
                habitat: habitatData ? getEspName(habitatData.names) : DATA_NOT_AVAILABLE ,
                description: getEspDescription(flavor_text_entries)
            }));
            dispatch(setLoadingDescription(false));
        } catch (error:any) {
            console.log(error);
            dispatch(setErrorMessage(error.message));
            dispatch(setLoadingPokemon(false));
        }
    }


    const getPokemonMoves = async(moves: MovementType[]) => {
        console.log('getPokemonMoves', moves.length, 'total moves to filter and obtain');
        dispatch(setLoadingMovements(true));
        const returnArr: any[] = [];
        try {
            for await (const move of moves){
                let validMovement = false;
                move.version_group_details.forEach(version => 
                    {
                        if(/*version.version_group.name === gameVersionForMovement && */version.move_learn_method.name === movementObtainMethod) validMovement = true;
                    }
                );

                if(validMovement){
                    await pokeApi.get(move.move.url).then(({data}) => returnArr.push(data));
                }
            }
            dispatch(setPokemonMovements(returnArr));
            dispatch(setLoadingMovements(false));
        } catch (error) {
            console.log(error);
        }
    }

    const getEspName = (desc:LanguageType[]) => {
        const elem = desc.filter(element => (element.language.name === gameLanguage) && element.name);
        return elem.length === 1 ? elem[0].name : '';
     }

    const getEspDescription = (desc:FlavorTextEntriesType[]) => {
       const elem = desc.filter(element => (element.language.name === gameLanguage /*&& element.version.name === gameVersion*/) && element.flavor_text);
       return elem[0].flavor_text;
    }

    const calculateRealWeight = (weight:number) => {
        const strNum = weight.toString();
        const strNewNum = `${strNum.substring(0, strNum.length - 1)},${strNum.substring(strNum.length - 1, strNum.length)}`;
        return strNewNum;  
    }

    const isPokemonLoaded = () => {
        return !Object.is(pokemon, initialPokeState);
    }

    const isDescriptionLoaded = () => {
        return !Object.is(descriptionData, initialDescriptionState);
    }

    const isMovementLoaded = () => {
        return !Object.is(movementsData, initialMovementsState);
    }
    

    return {
        descriptionData,
        errorMessage,
        loadingDescription,
        loadingMovements,
        loadingPokemon,
        movementsData,
        pokemon,
        calculateRealWeight,
        getEspName,
        getPokemons,
        getPokemonDescription,
        getPokemonByName,
        getPokemonMoves,
        isPokemonLoaded,
        isDescriptionLoaded,
        isMovementLoaded
    }
}