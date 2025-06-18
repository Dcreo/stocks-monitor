import { StateSchema } from "@/app/providers";

export const getAuthData = (state: StateSchema) => state.jwtAuth
