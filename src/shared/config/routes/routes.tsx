import React, { ReactNode } from "react";
import { MainPage, DashboardPage, NotFoundPage } from "@/pages";

export enum RouteName {
  ROOT = "root",
  DASHBOARD = "dashboard",
  NOT_FOUND = "not_found"
}

export enum RoutePath {
  ROOT = "/",
  DASHBOARD = "/dashboard",
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
  [RouteName.NOT_FOUND]: {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
    auth: false
  }
} 
