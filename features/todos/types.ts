export type TodoModeT = "daily"  | "weekly" | "monthly" | "annual" | "future";

export type TodoT = {
  id: number;
  title: string;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  description: string | null;

  mode: TodoModeT;
  subTasks: TodoSubTaskT[] | null;
}

export type TodoSubTaskT = {
  id: number;
  title: string;
}