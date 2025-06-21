import { Route, Routes } from "react-router-dom";
import { routes } from "@/shared/config";
import { RouteItem } from "@/shared/config";
import { useEffect } from "react";
import { RoutePath } from "@/shared/config/routes/routes";

export const AppRouter =() => {
  const routerItems = () => {
    const result = Object.values(routes)
                         .map(({path, element}) => <Route path={path} element={element} />)

    console.warn(result)
    return result;
  }

  return(
    <Routes>
      {routerItems()}
    </Routes>
  )
}
