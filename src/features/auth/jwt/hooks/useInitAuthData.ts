import { useAppDispatch } from "@/shared/hooks";
import { useEffect } from "react";
import { resetAuthData, setAuthData } from "../model/slice/jwtAuthSlice";
import { JWTAuthData } from "../model/types/JWTAuthSchema";

export const useInitAuthData = (): void => {
  const dispatch = useAppDispatch();
  const nowTimestamp = Date.now() / 1000;

  const authData: JWTAuthData = JSON.parse(localStorage.getItem("authData")!);
  const tokenIsExpired: boolean = nowTimestamp > authData?.timestamp;
  
  if (tokenIsExpired) {
    dispatch(resetAuthData());
  } else {
    dispatch(setAuthData(authData));
  }
}
