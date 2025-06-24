import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQueryParams } from "../types/Autocomplete";
import { Stock } from "@/entities/Stock";

export const autocompleteApi = createApi({
  reducerPath: "autocompleteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL
  }),
  endpoints: (build) => ({
    search: build.query<Stock[], IQueryParams>({ 
      query: ({ action, query }) => `${action}?query=${query}`,
      // transformResponse: (response) => {
      //   return response as IAutocompleteApiResults; 
      // },
      keepUnusedDataFor: 0,
    })
  })
})

export const { useSearchQuery } = autocompleteApi;
