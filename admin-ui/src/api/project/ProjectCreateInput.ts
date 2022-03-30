import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  task?: TaskWhereUniqueInput | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
