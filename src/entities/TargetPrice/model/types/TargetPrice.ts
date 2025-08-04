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
  stockId?: number;
  activatedAt?: Date;
  enabled?: boolean;
}

export type TNewTargetPrice = Pick<ITargetPrice, "price" | "direction" | "activated" | "stockId" | "enabled">;
export type TEditTargetPrice = TNewTargetPrice & Pick<ITargetPrice, "id">;
export type ITargetPriceValidationMessages = Record<TTargetPriceKeys, TValidatorMessages>;

export type TTargetPriceKeys = keyof ITargetPrice;
export type TTargetPricesResponse = Record<ETargetPriceDirection, ITargetPrice[]>;
export type TTargetPriceRules = Record<TTargetPriceKeys, ValidatorRules[]>;

