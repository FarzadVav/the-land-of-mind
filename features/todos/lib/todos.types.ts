import { HabitT } from "@/features/habits/lib/habits.types";

export type TodoTypeT = "daily" | "weekly" | "monthly" | "annual" | "future";

export type TodoSubTaskT = {
  id: number;
  title: string;
  isDone: boolean;
}

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
  relatedHabits: HabitT[] | null;
}

export type TodosByTypeT = Record<TodoTypeT, TodoT[]>;