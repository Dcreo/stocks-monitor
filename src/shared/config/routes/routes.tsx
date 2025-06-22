import React, { ReactNode } from "react";
import { MainPage, DashboardPage, NotFoundPage, StockPositionsPage } from "@/pages";

export enum RouteName {
  ROOT = "root",
  DASHBOARD = "dashboard",
  STOCK_POSITIONS = "stock_positions",
  NOT_FOUND = "not_found"
}

export enum RoutePath {
  ROOT = "/",
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
