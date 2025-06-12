import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Stock } from "../model/types/Stock";

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL
  }),
  endpoints: (build) => ({
    getStocks: build.query<Stock[], void>({ 
      query: () => "stocks"
    })
  })
})

export const { useGetStocksQuery } = stocksApi;
