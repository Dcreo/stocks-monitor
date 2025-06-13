import React from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";
import { Modal } from "@/shared/ui";

export const App = () => {
  const { data, error, isLoading } = useGetStocksQuery();

  if (error) return <h2>Error</h2>;
  if (isLoading) return <h2>Data Loading</h2>

  return(
    <div>
      <h1>Stocks Monitor</h1>

      <Modal />

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
