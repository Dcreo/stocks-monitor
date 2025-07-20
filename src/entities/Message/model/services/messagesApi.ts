import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMessage, IUserMessagesParams } from "../../model/types/Message";
import { StateSchema } from "@/app/providers";

export const userMessagesApi = createApi({
  reducerPath: "userMessagesApi",
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
    getUserMessages: build.query<IMessage[], IUserMessagesParams>({
      query: (params) => ({
        url: "users/messages",
        params 
      }),
      keepUnusedDataFor: 0
    })
  })
})

export const { 
  useGetUserMessagesQuery
} = userMessagesApi;
