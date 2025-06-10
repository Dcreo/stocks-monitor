import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/entities/Counter";
import { StateSchema } from "@/app/providers";

export const App = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: StateSchema) => state.counter.value); 

  const incrementHandler = () => {
    dispatch(increment());
  }

  return(
    <div>
      <h1>Stocks Monitor</h1>

      { counterValue }

      <button onClick={incrementHandler}>Increment</button>
    </div>
  )
}
