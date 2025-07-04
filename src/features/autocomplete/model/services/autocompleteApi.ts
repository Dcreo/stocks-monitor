import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQueryParams } from "../types/Autocomplete";
import { Stock } from "@/entities/Stock";
import { StateSchema } from "@/app/providers";

export const autocompleteApi = createApi({
  reducerPath: "autocompleteApi",
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
    search: build.query<Stock[], IQueryParams>({ 
      query: ({ action, query }) => `${action}?query=${query}`,
      keepUnusedDataFor: 0,
    })
  })
})

export const { useSearchQuery } = autocompleteApi;
