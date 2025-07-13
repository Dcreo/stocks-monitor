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

export enum EStockModalType {
  INFO = "info"
}

export interface IStockSchema {
  id?: number;
  modal?: {
    isOpen?: boolean;
    type?: EStockModalType;
  }
}

// Reducer types
export interface ISetModalTypePayload extends IStockSchema {}
