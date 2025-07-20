import { RouteName, RoutePath } from "@/shared/config";

export interface IMenuItem {
  text: string;
  path: RoutePath;
}

export type MenuRouteName = Exclude<RouteName,
  RouteName.NOT_FOUND |
  RouteName.USER_MESSAGE
>

export const menuItems: Record<MenuRouteName, IMenuItem> = {
  [RouteName.ROOT]: {
    text: "Main Page",
    path: RoutePath.ROOT
  },
  [RouteName.STOCKS]: {
    text: "Stocks",
    path: RoutePath.STOCKS
  },
  [RouteName.DASHBOARD]: {
    text: "Dashboard",
    path: RoutePath.DASHBOARD
  },
  [RouteName.STOCK_POSITIONS]: {
    text: "Stock Positions",
    path: RoutePath.STOCK_POSITIONS
  },
  [RouteName.USER_MESSAGES]: {
    text: "Messages",
    path: RoutePath.USER_MESSAGES
  }
}
