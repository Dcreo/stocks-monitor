import { configureStore } from "@reduxjs/toolkit";
// TODO root paths
import { setupListeners } from "@reduxjs/toolkit/query";
import { stockReducer, stocksApi } from "@/entities/Stock";
import { StateSchema } from "./StateSchema";
import { jwtAuthReducer } from "@/features/auth/jwt";
import { usersApi } from "@/entities/User";
import { jwtAuthApi } from "@/features/auth/jwt";
import { autocompleteApi } from "@/features/autocomplete/model/services/autocompleteApi";
import { stockPositionApi } from "@/entities/StockPosition/model/services/stockPositionApi";
import { stockPositionReducer } from "@/entities/StockPosition";
import { userMessagesApi } from "@/entities/Message";
import { targetPriceApi } from "@/entities/TargetPrice";

const store = configureStore<StateSchema>({
  reducer: {
    //@ts-ignore
    jwtAuth: jwtAuthReducer,   
    stockPosition: stockPositionReducer,
    stock: stockReducer,
    [stocksApi.reducerPath]: stocksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [jwtAuthApi.reducerPath]: jwtAuthApi.reducer,
    [autocompleteApi.reducerPath]: autocompleteApi.reducer,
    [stockPositionApi.reducerPath]: stockPositionApi.reducer,
    [userMessagesApi.reducerPath]: userMessagesApi.reducer,
    [targetPriceApi.reducerPath]: targetPriceApi.reducer,
  },
  //@ts-ignore
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      stocksApi.middleware, 
      usersApi.middleware,
      jwtAuthApi.middleware,
      autocompleteApi.middleware,
      stockPositionApi.middleware,
      userMessagesApi.middleware,
      targetPriceApi.middleware,
    )
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

setupListeners(store.dispatch);

export default store;
