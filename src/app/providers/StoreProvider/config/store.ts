import { configureStore } from "@reduxjs/toolkit";
// TODO root paths
import { counterReducer } from "../../../../entities/Counter";
import { setupListeners } from "@reduxjs/toolkit/query";
import { stocksApi } from "@/entities/Stock";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [stocksApi.reducerPath]: stocksApi.reducer
  },
  //@ts-ignore
  middleware: (getDefaultMiddleware) => (getDefaultMiddleware().concat(stocksApi.middleware))
})

setupListeners(store.dispatch);

export default store;
