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
}

export enum ValidationErrors {
  EMPTY = "The field cannot be empty",
  NOT_NUMBER = "Value is not a number"

}

export interface StockPositionValidationErrors {
  stockId?: ValidationErrors;
  stocksNumber?: ValidationErrors;
  averagePrice?: ValidationErrors;
}
