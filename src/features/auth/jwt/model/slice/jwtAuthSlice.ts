import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JWTAuthData } from "../types/JWTAuthSchema";

export const jwtAuthSlice = createSlice({
  name: 'jwtAuth',
  initialState: {},
  reducers: {
    setAuthData: (state, action: PayloadAction<JWTAuthData>) => {
      if (action.payload?.jwtToken?.length) {
        localStorage.setItem("authData", JSON.stringify(action.payload));
      }

      return {...state, ...action.payload}
    },
    resetAuthData: (state) => {
      localStorage.removeItem("authData");
      return {...state, ...{}}
    }
  }
})

export const { setAuthData, resetAuthData } = jwtAuthSlice.actions

export default jwtAuthSlice.reducer
