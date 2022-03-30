import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  projects?: ProjectUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string;
};
