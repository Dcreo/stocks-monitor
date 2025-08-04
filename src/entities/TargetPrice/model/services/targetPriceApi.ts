import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { 
  ITargetPrice, 
  ETargetPriceDirection, 
  TNewTargetPrice, 
  TEditTargetPrice,
  TTargetPricesResponse 
} from "../../model/types/TargetPrice";
import { StateSchema } from "@/app/providers";
import { objectKeySerializer, ObjectSerializerMode } from "@/shared/lib";

export const targetPriceApi = createApi({
  reducerPath: "targetPriceApi",
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
  tagTypes: ["TargetPrices"],
  endpoints: (build) => ({
    getTargetPrices: build.query<TTargetPricesResponse, number>({ 
      query: (stockId) => "stocks/" + stockId + "/target_prices",
      transformResponse: (response: TTargetPricesResponse) => {
        const data = {} as TTargetPricesResponse;
        
        Object.keys(response).map((group) => {
          data[group as ETargetPriceDirection] = response[group as ETargetPriceDirection].map((item: ITargetPrice) => {
            return objectKeySerializer(item, ObjectSerializerMode.snakeToCamel) as ITargetPrice;
          })
        })
        
        return data;
      },
      keepUnusedDataFor: 0,
      providesTags: ["TargetPrices"]
    }),
    createTargetPrice: build.mutation<ITargetPrice, TNewTargetPrice>({
      query: (body) => ({
        url: "stocks/" + body.stockId + "/target_prices",
        method: "POST",
        body: {target_price: objectKeySerializer(body, ObjectSerializerMode.camelToSnake)}
      }),
      invalidatesTags: ["TargetPrices"]
    }),
    updateTargetPrice: build.mutation<ITargetPrice, TEditTargetPrice>({
      query: (body) => ({
        url: "stocks/" + body.stockId + "/target_prices/" + body.id,
        method: "PUT",
        body: {target_price: objectKeySerializer(body, ObjectSerializerMode.camelToSnake)}
      }),
      invalidatesTags: ["TargetPrices"]
    }),
  })
})

export const { 
  useGetTargetPricesQuery,
  useCreateTargetPriceMutation,
  useUpdateTargetPriceMutation,
} = targetPriceApi;
