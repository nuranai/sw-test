import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  characters: [],
  count: 0,
  loading: false,
  error: null,
  sorting: false,
  sortDirection: 'ascend'
}

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async ({ searchValue, pageNumber }) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?${searchValue ? `search=${searchValue}&` : ''}page=${pageNumber}`)
    const data = await response.json()
    return data
  } catch (error) {
    throw Error(error)
  }
})

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    sortCharacters(state, action) {
      state.characters.sort((a, b) => {
        if (a[action.payload.sortType] < b[action.payload.sortType]) return action.payload.sortDirection === 'ascend' ? -1 : 1
        if (a[action.payload.sortType] > b[action.payload.sortType]) return action.payload.sortDirection === 'ascend' ? 1 : -1
        return 0
      }
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      if (state.sorting) {
        
      }
      state.characters = action.payload.results
      state.count = action.payload.count
      state.loading = false
    })
      .addCase(fetchCharacters.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default charactersSlice.reducer

export const { sortCharacters } = charactersSlice.actions