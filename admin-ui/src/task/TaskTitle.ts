import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "name";

export const TaskTitle = (record: TTask): string => {
  return record.name || record.id;
};
