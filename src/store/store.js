import { configureStore } from "@reduxjs/toolkit"
import charactersReducer from "./slices/charactersSlice"
import favouriteReducer from './slices/favouriteSlice'
import searchValueReducer from './slices/searchValueSlice'

export default configureStore({
  reducer: {
    characters: charactersReducer,
    favourite: favouriteReducer,
    searchValue: searchValueReducer
  },
})