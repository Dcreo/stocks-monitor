import React, { useEffect, useState } from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";
import { StocksList } from "@/entities/Stock";
import { Navbar } from "@/widgets/Navbar";
import { useInitAuthData } from "@/features/auth/jwt/hooks/useInitAuthData";
import { AppRouter } from "@/app/providers/RouterProvider";
import { NavLink } from "react-router-dom";

export const App = () => {
  // TODO transfer to component
  const { data, error, isLoading } = useGetStocksQuery();
                                     useInitAuthData();

  if (error) return <h2>Error</h2>;
  if (isLoading) return <h2>Data Loading</h2>

  return(
    <div>
      <Navbar />
      <AppRouter />
    </div>
  )
}
