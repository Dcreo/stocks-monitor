import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../model/types/User";
import { IMessage } from "@/entities/Message";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_API_URL
  }),
  endpoints: (build) => ({
    getRandomUser: build.query<User, undefined>({ 
      query: () => "users/random",
    }),
  })
})

export const { useGetRandomUserQuery } = usersApi;
