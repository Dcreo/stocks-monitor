import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
  name: 'stock',
  initialState: {
    error: null,
    collection: []
  },
  reducers: {},
})

export const { } = stockSlice.actions

export default stockSlice.reducer
