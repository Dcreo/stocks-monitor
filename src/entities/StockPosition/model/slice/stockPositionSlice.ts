import { createSlice } from "@reduxjs/toolkit";
import { StockPositionFormType } from "../types/StockPosition";

export const stockPositionSlice = createSlice({
  name: 'stockPosition',
  initialState: {},
  reducers: {
    setModalData: (state, action) => {
      return { ...state, ...action.payload }
    }
  },
})

export const { setModalData } = stockPositionSlice.actions

export default stockPositionSlice.reducer
