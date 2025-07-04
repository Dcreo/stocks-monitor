import { StockPosition } from "@/entities/StockPosition";

export interface Stock { 
  id: number;
  ticker: string;
  currency: string;
  exchange: string;
  name: string;
  price: number;
  position: StockPosition;
}
