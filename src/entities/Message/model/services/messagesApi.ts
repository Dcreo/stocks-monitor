import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMessage } from "../../model/types/Message";

export const userMessagesApi = createApi({
  reducerPath: "userMessagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL
  }),
  endpoints: (build) => ({
    getUserMessages: build.query<IMessage[], void>({
      query: () => "users/messages"
    })
  })
})

export const { 
  useGetUserMessagesQuery
} = userMessagesApi;
