import { stocksApi } from "@/entities/Stock";
import { IStockPositionStateSchema } from "@/entities/StockPosition";
import { usersApi } from "@/entities/User";
import { JWTAuthData } from "@/features/auth/jwt";

export interface StateSchema {
  jwtAuth: JWTAuthData;
  stockPosition: IStockPositionStateSchema, 
  [stocksApi.reducerPath]: any; 
  [usersApi.reducerPath]: any;
}
