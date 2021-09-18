import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.favourites || '[]')

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    favouriteAdded(state, action) {
      // if character already exists don't add to favourites
      const isCharacterExist = state.findIndex((character) => character.name === action.payload.characterInfo.name)
      if (isCharacterExist === -1) {
        state.push(action.payload.characterInfo)
        localStorage.favourites = JSON.stringify(state)
      }
    }
  }
})

export default favouriteSlice.reducer

export const { favouriteAdded } = favouriteSlice.actions