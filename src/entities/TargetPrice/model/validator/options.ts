import { ValidatorRules as VRules } from "@/shared/lib";

export const TargetPriceValidatorOptions = {
  messages: {
    "price": {
      [VRules.REQUIRED]: "Price field is required",
      [VRules.IS_NUMBER]: "Price must be a number"
    } 
  },
  rules: {
    "price": [VRules.REQUIRED, VRules.IS_NUMBER]
  }
}
