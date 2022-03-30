import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TaskWhereInput = {
  completed?: BooleanNullableFilter;
  completedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  status?: "Option1";
  user?: UserListRelationFilter;
};
