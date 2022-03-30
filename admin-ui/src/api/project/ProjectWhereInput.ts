import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  task?: TaskWhereUniqueInput;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
