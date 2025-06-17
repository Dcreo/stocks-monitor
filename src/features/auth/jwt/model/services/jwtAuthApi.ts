import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JWTLoginData } from "../types/JWTAuthSchema";

export const jwtAuthApi = createApi({
  reducerPath: "jwtAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL
  }),
  endpoints: (build) => ({
    login: build.mutation({ 
      query: (body: JWTLoginData) => {
        return {
          url: "users/login",
          method: "POST",
          body
        }
      },
    }),
  })
})

export const { useLoginMutation } = jwtAuthApi;
