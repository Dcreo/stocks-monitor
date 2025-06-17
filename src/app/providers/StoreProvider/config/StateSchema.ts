import { stocksApi } from "@/entities/Stock";
import { usersApi } from "@/entities/User";
import { JWTAuthData } from "@/features/auth/jwt";

export interface StateSchema {
  jwtAuth: JWTAuthData;
  [stocksApi.reducerPath]: any; 
  [usersApi.reducerPath]: any;
}
