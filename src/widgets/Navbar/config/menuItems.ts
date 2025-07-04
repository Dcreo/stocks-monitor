import { RouteName, RoutePath } from "@/shared/config";

export interface IMenuItem {
  text: string;
  path: RoutePath;
}

export type MenuRouteName = Exclude<RouteName, RouteName.NOT_FOUND>

export const menuItems: Record<MenuRouteName, IMenuItem> = {
  [RouteName.ROOT]: {
    text: "Stocks",
    path: RoutePath.ROOT
  },
  [RouteName.DASHBOARD]: {
    text: "Dashboard",
    path: RoutePath.DASHBOARD
  },
  [RouteName.STOCK_POSITIONS]: {
    text: "Stock Positions",
    path: RoutePath.STOCK_POSITIONS
  },
}
