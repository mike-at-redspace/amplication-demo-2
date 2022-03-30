import { Task } from "../task/Task";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  task?: Task | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
