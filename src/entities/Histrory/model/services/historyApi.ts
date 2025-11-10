import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StateSchema } from "@/app/providers";
import { IHistory } from "../types/History";
import { objectKeySerializer, ObjectSerializerMode } from "@/shared/lib";

export const historyApi = createApi({
  reducerPath: "historyApi",
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
    getHistory: build.query<IHistory[], void>({ 
      query: () => "stock_positions/history",
      keepUnusedDataFor: 0,
      transformResponse: (response: IHistory[]) => {
        const data = response.map((stockPosition: IHistory) => {
          return objectKeySerializer(stockPosition, ObjectSerializerMode.snakeToCamel) as IHistory;
        })

        return data;
      },
    }),
  })
})

export const { 
  useGetHistoryQuery,
} = historyApi;
