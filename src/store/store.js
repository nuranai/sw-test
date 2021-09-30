import { configureStore } from "@reduxjs/toolkit"
import charactersReducer from "./slices/charactersSlice"
import favouriteReducer from './slices/favouriteSlice'
import searchValueReducer from './slices/searchValueSlice'
import viewReducer from "./slices/viewSlice"

export default configureStore({
  reducer: {
    characters: charactersReducer,
    favourite: favouriteReducer,
    searchValue: searchValueReducer,
    view: viewReducer
  },
})