import { ReactNode } from "react";
import { Stock } from "@/entities/Stock";

// Base Stock Position Interface
export interface StockPosition {
  id?: number;
  stockId?: number;
  userId?: number;
  stocksNumber?: number;
  averagePrice?: number;
  stock?: Stock;
}

// Modes for Table view cells
export enum StockPositionCellMode {
  READONLY = "readonly",
  EDITABLE = "editable"
}

// Stock Position Table type
export interface IStockPositionTable extends StockPosition {
  actions?: ReactNode;
}

// Forms types
export enum StockPositionFormType {
  NEW = "new",
  EDIT = "edit"
}

// Store Schema
export interface IStockPositionStateSchema {
  isModalOpen?: boolean;
  stockPositiionId?: number;
  formType?: StockPositionFormType;
}

export enum FormFields {
  STOCK = "stock",
  STOCKS_NUMBER = "stocks_number"
}

// TODO fields messages for all
export enum StockPositionValidationMessages {
  EMPTY = "The field cannot be empty",
  NOT_NUMBER = "Value is not a number"
}

// Type for new Stock Position object
export type NewStockPosition = Pick<StockPosition, "stockId" | "stocksNumber" | "averagePrice">
