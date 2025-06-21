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
}

export const routes: Record<RouteName, RouteItem> = {
  [RouteName.ROOT]: {
    path: RoutePath.ROOT,
    element: <MainPage />
  },
  [RouteName.DASHBOARD]: {
    path: RoutePath.DASHBOARD,
    element: <DashboardPage />
  }
} 
