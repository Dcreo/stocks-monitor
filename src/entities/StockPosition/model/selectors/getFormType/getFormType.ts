import { StateSchema } from "@/app/providers";

export const getFormType = (state: StateSchema) => state.stockPosition.formType;
