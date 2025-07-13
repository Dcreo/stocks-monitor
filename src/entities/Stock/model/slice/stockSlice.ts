import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EStockModalType, ISetModalTypePayload } from "../types/Stock";

export const stockSlice = createSlice({
  name: 'stock',
  initialState: {},
  reducers: {
    setModalData: (state, action: PayloadAction<ISetModalTypePayload>) => {
      return {...state, ...action.payload};
    }
  },
})

export const { 
  setModalData
} = stockSlice.actions

export default stockSlice.reducer
