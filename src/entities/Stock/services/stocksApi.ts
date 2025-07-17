import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Stock } from "../model/types/Stock";
import { StateSchema } from "@/app/providers";
import { objectKeySerializer, ObjectSerializerMode } from "@/shared/lib";

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as StateSchema).jwtAuth.jwtToken

      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }

      return headers;
    }
  }),
  endpoints: (build) => ({
    getStocks: build.query<Stock[], void>({ 
      query: () => "stocks"
    }),
    getStock: build.query<Stock, number | undefined>({
      query: (id) => "stocks/" + id,
      transformResponse: (response: Stock) => {
        return objectKeySerializer(response, ObjectSerializerMode.snakeToCamel) as Stock;
      },
    })
  })
})

export const { 
  useGetStocksQuery,
  useGetStockQuery,
} = stocksApi;
