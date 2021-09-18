import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    searchValueChange(state, action) {
      state = action.payload
      return state
    }
  }
})

export default searchValueSlice.reducer

export const { searchValueChange } = searchValueSlice.actions