import React, { ReactNode } from "react";
import { MainPage, DashboardPage, NotFoundPage, StockPositionsPage, StocksPage } from "@/pages";

export enum RouteName {
  ROOT = "root",
  STOCKS = "stocks",
  DASHBOARD = "dashboard",
  STOCK_POSITIONS = "stock_positions",
  NOT_FOUND = "not_found"
}

export enum RoutePath {
  ROOT = "/",
  STOCKS = "/stocks",
  DASHBOARD = "/dashboard",
  STOCK_POSITIONS = "/stock_positions",
  NOT_FOUND = "*"
}

export interface RouteItem {
  path: RoutePath;
  element: ReactNode;
  auth: boolean;
}

export const routes: Record<RouteName, RouteItem> = {
  [RouteName.ROOT]: {
    path: RoutePath.ROOT,
    element: <MainPage />,
    auth: false
  },
  [RouteName.STOCKS]: {
    path: RoutePath.STOCKS,
    element: <StocksPage />,
    auth: true,
  },
  [RouteName.DASHBOARD]: {
    path: RoutePath.DASHBOARD,
    element: <DashboardPage />,
    auth: true
  },
  [RouteName.STOCK_POSITIONS]: {
    path: RoutePath.STOCK_POSITIONS,
    element: <StockPositionsPage />,
    auth: true
  },
  // Should be the last
  [RouteName.NOT_FOUND]: {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
    auth: false
  },
} 
