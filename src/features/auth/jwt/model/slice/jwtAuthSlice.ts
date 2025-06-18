import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JWTAuthData } from "../types/JWTAuthSchema";
import { User } from "@/entities/User";

export const jwtAuthSlice = createSlice({
  name: 'jwtAuth',
  initialState: {},
  reducers: {
    setAuthData: (state, action: PayloadAction<JWTAuthData>) => {
      if (action.payload?.jwtToken?.length) {
        localStorage.setItem("authData", JSON.stringify(action.payload));
      }

      return {...state, ...action.payload}
    }
  }
})

export const { setAuthData } = jwtAuthSlice.actions

export default jwtAuthSlice.reducer
