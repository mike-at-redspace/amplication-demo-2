import { UserCreateNestedManyWithoutTasksInput } from "./UserCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  completed?: boolean | null;
  completedDate?: Date | null;
  name?: string | null;
  status?: "Option1" | null;
  user?: UserCreateNestedManyWithoutTasksInput;
};
