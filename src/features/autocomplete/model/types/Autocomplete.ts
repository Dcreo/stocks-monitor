import { Stock } from "@/entities/Stock";
import { StockPosition } from "@/entities/StockPosition";

// TODO all interfaces to I
export interface AutocompleteSlice {
  results: [];
}

export interface IQueryParams {
  action: string;
  query: string;
}
