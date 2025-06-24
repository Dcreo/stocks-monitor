import React, { useEffect, useState } from "react";
import { Stock, useGetStocksQuery } from "@/entities/Stock";
import { StocksList } from "@/entities/Stock";
import { Navbar } from "@/widgets/Navbar";
import { useInitAuthData } from "@/features/auth/jwt/hooks/useInitAuthData";
import { AppRouter } from "@/app/providers/RouterProvider";
import { NavLink } from "react-router-dom";

export const App = () => {
  useInitAuthData();

  return(
    <div>
      <Navbar />
      <AppRouter />
    </div>
  )
}
