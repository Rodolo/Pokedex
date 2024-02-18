import { createSlice } from '@reduxjs/toolkit';
import { PokeSliceType } from '../types/types'
import { initialPokeState, initialDescriptionState, initialMovementsState } from '../utils/utils';


const initialState : PokeSliceType = { 
       pokemon: initialPokeState,
       descriptionData: initialDescriptionState,
       movementsData: initialMovementsState,
       loadingPokemon: false,
       loadingDescription: false,
       loadingMovements: false,
       errorMessage: undefined 
      };

export const pokeSlice = createSlice({
   name: 'pokeState',
   initialState,
   reducers: {
           setPokemon: (state, {payload}) => {
               state.pokemon = payload;
           },
           setPokemonDescription: (state, {payload} ) => {
               state.descriptionData = {... state.descriptionData, ...payload};
           },
           setPokemonMovements: (state, {payload}) => {
            state.movementsData = payload;
           },
           setErrorMessage:  (state, {payload}) => {
              state.errorMessage = payload;
           },
           setLoadingPokemon: (state, {payload}) => {
              state.loadingPokemon = payload;
           },
           setLoadingDescription: (state, {payload}) => {
              state.loadingDescription = payload;
           },
           setLoadingMovements: (state, {payload}) => {
              state.loadingMovements = payload;
           },
           clearPokemonData: (state) => {
              state.pokemon = initialPokeState;
              state.descriptionData = initialDescriptionState;
              state.movementsData = initialMovementsState;
           },
           clearErrorMessage: (state) => {
            state.errorMessage = undefined
         }
      }
});
export const { 
   clearErrorMessage, 
   clearPokemonData, 
   setErrorMessage, 
   setLoadingDescription, 
   setLoadingMovements,
   setLoadingPokemon, 
   setPokemon, 
   setPokemonDescription, 
   setPokemonMovements } = pokeSlice.actions;

export default pokeSlice.reducer;