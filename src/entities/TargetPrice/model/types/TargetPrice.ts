export enum ETargetPriceDirection {
  ABOVE = "above",
  BELOW = "below"
}

export interface ITargetPrice {
  id?: number;
  price: number;
  direction: ETargetPriceDirection;
  activated?: boolean;
}
