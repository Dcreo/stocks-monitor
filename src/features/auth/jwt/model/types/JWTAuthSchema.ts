import { User } from "@/entities/User";

export interface JWTAuthData {
  jwtToken: string | null;
  expiresAt: string;
  user: User | null;
}

export interface JWTLoginData {
  username: string;
  password: string;
}
