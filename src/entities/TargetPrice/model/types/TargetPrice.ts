import { TValidatorMessages, ValidatorRules } from "@/shared/lib";

export enum ETargetPriceDirection {
  ABOVE = "above",
  BELOW = "below"
}

export interface ITargetPrice {
  id?: number;
  price?: number;
  direction?: ETargetPriceDirection;
  activated?: boolean;
}

export type TTargetPriceKeys = keyof ITargetPrice;

export type TTargetPriceRules = Record<TTargetPriceKeys, ValidatorRules[]>
export type ITargetPriceValidationMessages = Record<TTargetPriceKeys, TValidatorMessages>
