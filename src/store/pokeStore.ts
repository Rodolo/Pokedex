import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from '../slice/pokeSlice'

export const store =  configureStore({
    reducer: {
      pokeState: pokeReducer
    },
  })


  export type RootState = ReturnType<typeof store.getState>