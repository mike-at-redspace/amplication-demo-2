import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TaskWhereInput = {
  completed?: BooleanNullableFilter;
  completedDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
  user?: UserListRelationFilter;
};
