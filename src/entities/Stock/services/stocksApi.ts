import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Stock } from "../model/types/Stock";
import { StateSchema } from "@/app/providers";

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
    })
  })
})

export const { useGetStocksQuery } = stocksApi;
