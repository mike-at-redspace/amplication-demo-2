import { UserUpdateManyWithoutTasksInput } from "./UserUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  completed?: boolean | null;
  completedDate?: Date | null;
  name?: string | null;
  status?: "Option1" | null;
  user?: UserUpdateManyWithoutTasksInput;
};
