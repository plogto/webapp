import { User } from "./user";

export type Post = {
  id: string;
  user: User;
  content: string;
  status: number;
  createdAt: string;
  updatedAt: string;
};
