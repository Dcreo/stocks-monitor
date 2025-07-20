import React, { ReactNode } from "react";
import { 
  MainPage, 
  DashboardPage, 
  NotFoundPage, 
  StockPositionsPage, 
  StocksPage, 
  UserMessagesPage, 
  UserMessagePage
} from "@/pages";

export enum RouteName {
  ROOT = "root",
  STOCKS = "stocks",
  DASHBOARD = "dashboard",
  STOCK_POSITIONS = "stock_positions",
  USER_MESSAGES = "messages",
  USER_MESSAGE = "message",
  NOT_FOUND = "not_found"
}

export enum RoutePath {
  ROOT = "/",
  STOCKS = "/stocks",
  DASHBOARD = "/dashboard",
  STOCK_POSITIONS = "/stock_positions",
  USER_MESSAGES = "/users/messages",
  USER_MESSAGE = "/users/messages/:id", 
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
  [RouteName.USER_MESSAGES]: {
    path: RoutePath.USER_MESSAGES,
    element: <UserMessagesPage />,
    auth: true
  },
  [RouteName.USER_MESSAGE]: {
    path: RoutePath.USER_MESSAGE,
    element: <UserMessagePage />,
    auth: true
  },
  // Should be the last
  [RouteName.NOT_FOUND]: {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
    auth: false
  },
} 
