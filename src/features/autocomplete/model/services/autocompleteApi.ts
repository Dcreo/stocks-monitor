import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AutocompleteApiResults } from "../types/Autocomplete";

export const autocompleteApi = createApi({
  reducerPath: "autocompleteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL
  }),
  endpoints: (build) => ({
    search: build.query<AutocompleteApiResults, void>({ 
      query: (url) => `${url}`
    })
  })
})

export const { useSearchQuery } = autocompleteApi;
