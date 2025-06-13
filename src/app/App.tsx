import React, { useState } from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";
import { LoginModal } from "@/features/auth/jwt";
import { StocksList } from "@/entities/Stock";

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
      <LoginModal />
      <h1>Stocks Monitor</h1>
      <StocksList stocks={data as Stock[]} />
    </div>
  )
}
