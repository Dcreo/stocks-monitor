import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewStockPosition, StockPosition } from "../types/StockPosition";

export const stockPositionApi = createApi({
  reducerPath: "stockPositionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL
  }),
  endpoints: (build) => ({
    getStockPositions: build.query<StockPosition[], void>({ 
      query: () => "stock_positions"
    }),
    createStockPosition: build.mutation<StockPosition, NewStockPosition>({
      query: (body) => ({
        url: "stock_positions",
        method: "POST",
        body
      })
    })
  })
})

export const { 
  useGetStockPositionsQuery,
  useCreateStockPositionMutation
} = stockPositionApi;
