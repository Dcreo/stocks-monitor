import { getAuthData, JWTAuthData } from "@/features/auth/jwt"
import { useAppSelector } from "@/shared/hooks/Store/Store";

export const useAuth = () => {
  const { user } = useAppSelector(getAuthData); 

  const isLoggedIn = user?.username?.length

  return {
    isLoggedIn,
    username: user?.username,
    email: user?.email
  }
} 
