import { useEffect, useState } from "react";
import { getAuthData, JWTAuthData, resetAuthData } from "@/features/auth/jwt"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/Store/Store";
import { useNavigate } from "react-router-dom";
import { Authorize, routes } from "@/shared/config";

export const useAuthData = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [authorize, setAuthoize] = useState<Authorize>();
  const { jwtToken, user } = useAppSelector(getAuthData); 
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const logout = () => {
    dispatch(resetAuthData());
    setIsLoggedIn(false);
    navigate(routes.root.path); 
  }

  useEffect(() => {
    setIsLoggedIn(!!jwtToken);
    setAuthoize(new Authorize(user))
  }, [user])

  return {
    isLoggedIn,
    username: user?.username,
    email: user?.email,
    logout,
    authorize
  }
} 
