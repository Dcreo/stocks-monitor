import React, { useEffect, useState } from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";
import { StocksList } from "@/entities/Stock";
import { Navbar } from "@/widgets/Navbar";
import { useInitAuthData } from "@/features/auth/jwt/hooks/useInitAuthData";

export const App = () => {
  // TODO transfer to component
  const { data, error, isLoading } = useGetStocksQuery();
                                     useInitAuthData();

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
