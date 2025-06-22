import { User } from "@/entities/User";
import { RouteItem } from "@/shared/config";
import { RouteName, routes } from "@/shared/config";

export class Authorize {
  authorizedResources: RouteName[];
  user: User;

  constructor(user: User) {
    this.user = user;
    this.authorizedResources = [];

    this.checkPermissions()
  }

  checkPermissions() {
    Object.keys(routes).forEach(routeName => {
      const route = routes[routeName as RouteName];

      if (this.user?.email) {
        if (!!route.auth || !route.auth) {
          this.authorizedResources.push(routeName as RouteName)
        }
      } else {
        if (!route.auth) {
          this.authorizedResources.push(routeName as RouteName)
        }
      }
    })
  }

  can(routeName: RouteName) {
    return !!this.authorizedResources.includes(routeName)
  }
} 
