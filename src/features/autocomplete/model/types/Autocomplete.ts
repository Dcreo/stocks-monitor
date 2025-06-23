import { Stock } from "@/entities/Stock";

export interface AutocompleteSlice {
  results: [];
}

export interface AutocompleteApiResults {
  [index: number]: Stock
}
