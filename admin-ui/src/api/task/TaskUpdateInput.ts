import { ProjectUpdateManyWithoutTasksInput } from "./ProjectUpdateManyWithoutTasksInput";
import { UserUpdateManyWithoutTasksInput } from "./UserUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  completed?: boolean | null;
  completedDate?: Date | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutTasksInput;
  status?: "Option1" | null;
  user?: UserUpdateManyWithoutTasksInput;
};
