import { StateSchema } from "@/app/providers"
import { BaseQueryApi } from "@reduxjs/toolkit/query"

type GetState = Pick<BaseQueryApi, "getState">

export const prepareHeaders = (headers: Headers, api: GetState) => {
  const token = (api?.getState() as StateSchema)?.jwtAuth?.jwtToken

  console.warn(token)

  if (token) {
    headers?.set("authorization", `Bearer ${token}`)
  }

  return headers;
};
