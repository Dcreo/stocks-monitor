import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JWTAuthSchema } from "../types/JWTAuthSchema";

export const jwtAuthSlice = createSlice({
  name: 'jwt_auth',
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    }
  }
})

export const {  } = jwtAuthSlice.actions

export default jwtAuthSlice.reducer
