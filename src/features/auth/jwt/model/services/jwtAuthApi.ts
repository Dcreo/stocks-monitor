import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JWTAuthData, JWTLoginData } from "../types/JWTAuthSchema";

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
      transformResponse: (response, meta, arg) => {
        if (meta?.response?.status != 200) return response; 

        const data: JWTAuthData = {
          jwtToken: response.token,
          timestamp: response.expires_at,
          user: response.user
        }

        return data;
      }
    }),
  })
})

export const { useLoginMutation } = jwtAuthApi;
