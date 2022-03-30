import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  taskId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
