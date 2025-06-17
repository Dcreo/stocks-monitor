import { configureStore } from "@reduxjs/toolkit";
// TODO root paths
import { setupListeners } from "@reduxjs/toolkit/query";
import { stocksApi } from "@/entities/Stock";
import { StateSchema } from "./StateSchema";
import { jwtAuthReducer } from "@/features/auth/jwt";
import { usersApi } from "@/entities/User";
import { jwtAuthApi } from "@/features/auth/jwt";

const store = configureStore<StateSchema>({
  reducer: {
    //@ts-ignore
    jwtAuth: jwtAuthReducer,   
    [stocksApi.reducerPath]: stocksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [jwtAuthApi.reducerPath]: jwtAuthApi.reducer,
  },
  //@ts-ignore
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      stocksApi.middleware, 
      usersApi.middleware,
      jwtAuthApi.middleware,
    )
  }
})

setupListeners(store.dispatch);

export default store;
