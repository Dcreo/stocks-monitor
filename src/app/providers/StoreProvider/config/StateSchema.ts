import { stocksApi } from "@/entities/Stock";
import { usersApi } from "@/entities/User";
import { JWTAuthSchema } from "@/features/auth/jwt";

export interface StateSchema {
  jwt_auth: JWTAuthSchema;
  [stocksApi.reducerPath]: any; 
  [usersApi.reducerPath]: any;
}
