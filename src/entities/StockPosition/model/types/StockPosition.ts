export enum FormFields {
  STOCK = "stock",
  STOCKS_NUMBER = "stocks_number"
}

export interface StockPosition {
  id?: number;
  stockId?: number;
  userId?: number;
  stocksNumber?: number;
}
