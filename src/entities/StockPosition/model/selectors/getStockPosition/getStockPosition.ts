import { StateSchema } from "@/app/providers";

export const getStockPosition = (state: StateSchema) => state.stockPosition.stockPosition;
