import stockReducer from "./model/slice/stockSlice";

export { stocksApi } from "./services/stocksApi";
export { 
  useGetStocksQuery,
  useGetStockQuery
} from "./services/stocksApi";
export { setModalData } from "./model/slice/stockSlice";
export { 
  type Stock,
  type IStockSchema,
  type ISetModalTypePayload,
  EStockModalType
} from "./model/types/Stock";

export { StocksList } from "./ui/StocksList/StocksList";
export { StockDetailsModal } from "./ui/StockDetailsModal/StockDetailsModal";

export { getStockId } from "./model/selectors/getStockId/getStockId";
export { getStockModal } from "./model/selectors/getStockModal/getStockModal";

export {
  stockReducer
}
