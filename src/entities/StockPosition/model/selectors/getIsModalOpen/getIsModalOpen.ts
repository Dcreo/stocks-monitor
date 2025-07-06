import { StateSchema } from "@/app/providers";

export const getIsModalOpen = (state: StateSchema) => state?.stockPosition?.isModalOpen;
