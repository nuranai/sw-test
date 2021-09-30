import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.favourites || '[]')

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    favouriteAdded(state, action) {
      state.push(action.payload)
      localStorage.favourites = JSON.stringify(state)
    },
    favouriteRemove(state, action) {
      const characterPosition = state.findIndex(character => character.name === action.payload.name)
      if (characterPosition > -1) {
        state.splice(characterPosition, 1)
        localStorage.favourites = JSON.stringify(state)
      }
    },
    favouriteSort(state, action) {
      state.sort((a, b) => {
        if (a[action.payload.sortType] < b[action.payload.sortType]) return action.payload.sortDirection === 'ascend' ? -1 : 1
        if (a[action.payload.sortType] > b[action.payload.sortType]) return action.payload.sortDirection === 'ascend' ? 1 : -1
        return 0
      })
    },
  }
})

export default favouriteSlice.reducer

export const { favouriteAdded, favouriteRemove, favouriteSort } = favouriteSlice.actions