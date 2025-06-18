import { User } from "@/entities/User";

export interface JWTAuthData {
  jwtToken: string;
  timestamp: number;
  user: User;
}

export interface JWTLoginData {
  username: string;
  password: string;
}
