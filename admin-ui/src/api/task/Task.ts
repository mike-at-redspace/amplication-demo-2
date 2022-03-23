import { User } from "../user/User";

export type Task = {
  completed: boolean | null;
  completedDate: Date | null;
  createdAt: Date;
  id: string;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: Array<User>;
};
