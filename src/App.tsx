import React, { useState } from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";
import { Modal } from "@/shared/ui";

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

      <span onClick={modalOpenHandler}>Open modal</span>

      <Modal isOpen={modalIsOpen} onClose={modalClosehandler} />

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
