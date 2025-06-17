export interface User {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  jwt_token?: string;
}

export type RandomUser = Omit<User, "id" | "jwt_token" | "email">
