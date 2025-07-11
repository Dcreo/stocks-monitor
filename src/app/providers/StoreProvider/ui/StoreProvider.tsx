import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "../config/store";

console.warn(store);

interface StoreProviderProps {
  children?: ReactNode; 
}

export const StoreProvider = (props: any) => {
  const { children } = props;

  return(
    <Provider store={store}>
      { children }
    </Provider>
  )
}
