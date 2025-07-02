import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewStockPosition, StockPosition } from "../types/StockPosition";
import { objectKeySerializer, ObjectSerializerMode } from "@/shared/lib";
import { StateSchema } from "@/app/providers";

export const stockPositionApi = createApi({
  reducerPath: "stockPositionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL,
    // TODO common part
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as StateSchema).jwtAuth.jwtToken

      console.warn(token)

      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }

      return headers;
    }
  }),
  endpoints: (build) => ({
    getStockPositions: build.query<StockPosition[], void>({ 
      query: () => "stock_positions"
    }),
    createStockPosition: build.mutation<StockPosition, NewStockPosition>({
      query: (body) => ({
        url: "stock_positions",
        method: "POST",
        body: {stock_position: objectKeySerializer(body, ObjectSerializerMode.camelToSnake)}
      })
    })
  })
})

export const { 
  useGetStockPositionsQuery,
  useCreateStockPositionMutation
} = stockPositionApi;
