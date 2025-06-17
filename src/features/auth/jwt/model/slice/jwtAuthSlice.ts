import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JWTAuthData } from "../types/JWTAuthSchema";

export const jwtAuthSlice = createSlice({
  name: 'jwtAuth',
  initialState: {
    jwtToken: null,
    user: null
  },
  reducers: {
    setAuthData: (state, action: PayloadAction<JWTAuthData>) => {
      console.warn("AUTH DATA", action.payload);
    }
  }
})

export const { setAuthData } = jwtAuthSlice.actions

export default jwtAuthSlice.reducer
