import React, { useEffect, useState } from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";
import { StocksList } from "@/entities/Stock";
import { Navbar } from "@/widgets/Navbar";
import { useAppDispatch } from "@/shared/hooks";
import { setAuthData } from "@/features/auth/jwt/model/slice/jwtAuthSlice";
import { JWTAuthData } from "@/features/auth/jwt";

export const App = () => {
  const { data, error, isLoading } = useGetStocksQuery();

  const dispatch = useAppDispatch();
  const authData = JSON.parse(localStorage.getItem("authData")!);
  
  useEffect(() => {
    console.warn(authData)
    dispatch(setAuthData(authData));
  }, [])

  if (error) return <h2>Error</h2>;
  if (isLoading) return <h2>Data Loading</h2>

  return(
    <div>
      <Navbar />
      <h1>Stocks Monitor</h1>
      <StocksList stocks={data as Stock[]} />
    </div>
  )
}
