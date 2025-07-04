import { Stock } from "@/entities/Stock";

export enum StockPositionCellMode {
  READONLY = "readonly",
  EDITABLE = "editable"
}

export enum FormFields {
  STOCK = "stock",
  STOCKS_NUMBER = "stocks_number"
}

export interface StockPosition {
  id?: number;
  stockId?: number;
  userId?: number;
  stocksNumber?: number;
  averagePrice?: number;
  stock?: Stock;
}

// TODO fields messages for all
export enum StockPositionValidationMessages {
  EMPTY = "The field cannot be empty",
  NOT_NUMBER = "Value is not a number"
}

export type NewStockPosition = Pick<StockPosition, "stockId" | "stocksNumber" | "averagePrice">
