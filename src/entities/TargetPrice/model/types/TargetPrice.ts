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
  stock_id?: number;
  activatedAt?: Date;
  enabled?: boolean;
}

export type INewTargetPrice = Pick<ITargetPrice, "price" | "direction" | "activated" | "stock_id">
export type ITargetPriceValidationMessages = Record<TTargetPriceKeys, TValidatorMessages>

export type TTargetPriceKeys = keyof ITargetPrice;
export type TTargetPricesResponse = Record<ETargetPriceDirection, ITargetPrice[]>;
export type TTargetPriceRules = Record<TTargetPriceKeys, ValidatorRules[]>

