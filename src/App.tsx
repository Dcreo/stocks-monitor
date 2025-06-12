import React from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";

export const App = () => {
  const { data, error, isLoading } = useGetStocksQuery();

  if (error) return <h2>Error</h2>;
  if (isLoading) return <h2>Data Loading</h2>

  return(
    <div>
      <h1>Stocks Monitor</h1>

      {data && (
        data.map((stock: Stock) => {
          return(
            <div>{ stock.name }</div>
          )
        })
      )}
    </div>
  )
}
