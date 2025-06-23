import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState: {
    results: []
  },
  reducers: {
    setResults: (state, action: PayloadAction<[]>) => {
      state.results = action.payload
    }
  }
})

export const { } = autocompleteSlice.actions

export default autocompleteSlice.reducer
