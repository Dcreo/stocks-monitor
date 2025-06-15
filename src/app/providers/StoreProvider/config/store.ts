import { configureStore } from "@reduxjs/toolkit";
// TODO root paths
import { setupListeners } from "@reduxjs/toolkit/query";
import { stocksApi } from "@/entities/Stock";
import { StateSchema } from "./StateSchema";
import { jwtAuthReducer } from "@/features/auth/jwt";
import { usersApi } from "@/entities/User";

const store = configureStore<StateSchema>({
  reducer: {
    jwt_auth: jwtAuthReducer,   
    [stocksApi.reducerPath]: stocksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  //@ts-ignore
  middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(stocksApi.middleware, 
                                                                       usersApi.middleware,
                                                                      ))
})

setupListeners(store.dispatch);

export default store;
