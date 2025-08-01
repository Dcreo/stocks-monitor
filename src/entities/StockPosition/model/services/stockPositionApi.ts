import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EditableStockPosition, ICapitalStatistic, NewStockPosition, StockPosition } from "../types/StockPosition";
import { objectKeySerializer, ObjectSerializerMode } from "@/shared/lib";
import { StateSchema } from "@/app/providers";
import { response } from "express";

export const stockPositionApi = createApi({
  reducerPath: "stockPositionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL,
    // TODO common part
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as StateSchema).jwtAuth.jwtToken

      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }

      return headers;
    }
  }),
  tagTypes: ["StockPositions", "CapitalStatistic"],
  endpoints: (build) => ({
    getStockPositions: build.query<StockPosition[], void>({ 
      query: () => "stock_positions",
      transformResponse: (response: StockPosition[]) => {
        const data = response.map((stockPosition: StockPosition) => {
          return objectKeySerializer(stockPosition, ObjectSerializerMode.snakeToCamel) as StockPosition;
        })

        return data;
      },
      providesTags: ["StockPositions"],
    }),
    getStockPosition: build.query<StockPosition, number | undefined>({ 
      query: (id: number) => `stock_positions/${id}`,
      transformResponse: (response: StockPosition) => {
        return objectKeySerializer(response, ObjectSerializerMode.snakeToCamel) as StockPosition;
      },
      // @ts-ignore
      providesTags: (response, error, id) => [{ type: "StockPosition", id }]
    }),
    createStockPosition: build.mutation<StockPosition, NewStockPosition>({
      query: (body) => ({
        url: "stock_positions",
        method: "POST",
        body: {stock_position: objectKeySerializer(body, ObjectSerializerMode.camelToSnake)}
      }),
      invalidatesTags: ["StockPositions", "CapitalStatistic"]
    }),
    deleteStockPosition: build.mutation<StockPosition, number>({
      query: (id) => ({
        url: "stock_positions/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["StockPositions", "CapitalStatistic"]
    }),
    updateStockPosition: build.mutation<StockPosition, EditableStockPosition>({
      query: (body) => ({
        url: `stock_positions/${body?.id}`,
        method: "PUT",
        body: {stock_position: objectKeySerializer(body, ObjectSerializerMode.camelToSnake)}
      }),
      // TODO invalidate only updated item
      // @ts-ignore
      invalidatesTags: (result, error, arg) => (
        [{type: "StockPositions"}, { type: "StockPosition", id: arg.id }]
      )
    }),
    getCapitalStatistic: build.query<ICapitalStatistic, void>({
      query: () => `stock_positions/capital_statistic`,
      transformResponse: (response: ICapitalStatistic) => {
        return objectKeySerializer(response, ObjectSerializerMode.snakeToCamel) as ICapitalStatistic;
      },
      providesTags: ["CapitalStatistic"]
    })
  })
})

export const { 
  useGetStockPositionsQuery,
  useGetStockPositionQuery,
  useGetCapitalStatisticQuery,
  useDeleteStockPositionMutation,
  useCreateStockPositionMutation,
  useUpdateStockPositionMutation,
} = stockPositionApi;
