export enum ETargetPriceDirection {
  UP = "UP",
  DOWN = "DOWN"
}

export interface ITargetPrice {
  id?: number;
  price: number;
  direction: ETargetPriceDirection;
  activated?: boolean;
}
