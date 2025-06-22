import { Route, Routes } from "react-router-dom";
import { routes } from "@/shared/config";
import { RouteItem } from "@/shared/config";
import { useEffect } from "react";
import { RouteName, RoutePath } from "@/shared/config";
import { useAuthData } from "@/features/auth/jwt";

export const AppRouter =() => {
  const { authorize } = useAuthData();

  const routerItems = () => {

    return Object.keys(routes).map((routeName) => {
      const route = routes[routeName as RouteName];

      if (authorize?.can(routeName as RouteName)) return <Route path={route.path} element={route.element} />
    })
  }

  return(
    <Routes>
      {routerItems()}
    </Routes>
  )
}
