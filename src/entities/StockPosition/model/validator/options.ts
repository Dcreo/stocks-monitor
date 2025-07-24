import { ValidatorRules as VRules } from "@/shared/lib";

export const StockPositionValidatorOptions = {
  messages: {
    "stockId": {
      [VRules.REQUIRED]: "Price field is required",
    },
    "stocksNumber": {
      [VRules.REQUIRED]: "Stocks number field is required",
      [VRules.IS_NUMBER]: "Stocks number field must be number",
    },
    "averagePrice": {
      [VRules.REQUIRED]: "Average Price field is required"
    }
  },
  rules: {
    "stockId": [VRules.REQUIRED],
    "stocksNumber": [VRules.REQUIRED, VRules.IS_NUMBER],
    "averagePrice": [VRules.REQUIRED]
  }
}
