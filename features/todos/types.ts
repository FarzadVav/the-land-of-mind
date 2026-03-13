export type TodoTypeT = "daily" | "weekly" | "monthly" | "annual" | "future";

export type TodoT = {
  id: number;
  title: string;
  isDone: boolean;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  doneAt: string | null;
  description: string | null;

  type: TodoTypeT;
  subTasks: TodoSubTaskT[] | null;
}

export type TodoSubTaskT = {
  id: number;
  title: string;
  isDone: boolean;
}