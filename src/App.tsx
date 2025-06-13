import React, { useState } from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";
import { LoginModal } from "@/features/auth/jwt";

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const { data, error, isLoading } = useGetStocksQuery();

  if (error) return <h2>Error</h2>;
  if (isLoading) return <h2>Data Loading</h2>

  const modalOpenHandler = () => {
    setModalIsOpen(true);
  }

  const modalClosehandler = () => {
    setModalIsOpen(false);
  }

  return(
    <div>
      <h1>Stocks Monitor</h1>

      <LoginModal />

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
