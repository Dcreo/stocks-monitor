export interface IMessage {
  id?: number;
  text?: string;
  title?: string;
  createdAt?: Date;
  read?: boolean;
}

// API types
export interface IUserMessagesParams {
  limit?: number;
}
