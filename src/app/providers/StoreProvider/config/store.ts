import { configureStore } from "@reduxjs/toolkit";
// TODO root paths
import { counterReducer } from "../../../../entities/Counter";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
