import { User } from "./user";

export type Connection = {
  id: string;
  following: User;
  follower: User;
  status: number;
  createdAt: string;
  updatedAt: string;
};
