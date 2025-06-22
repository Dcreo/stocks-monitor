import React, { ReactNode } from "react";
import { MainPage, DashboardPage } from "@/pages";

export enum RouteName {
  ROOT = "root",
  DASHBOARD = "dashboard"
}

export enum RoutePath {
  ROOT = "/",
  DASHBOARD = "/dashboard"
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
  }
} 
