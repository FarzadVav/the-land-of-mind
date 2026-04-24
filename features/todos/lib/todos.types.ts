import { HabitT } from "@/features/habits/lib/habits.types";
import { PeriodT } from "@/features/general/lib/general.types";

export type TodoTypeT = PeriodT;

export type TodoSubTaskT = {
  id: number;
  title: string;
  isDone: boolean;
}

export type TodoIfDontFinishT = "forward" | "history" | "extend";

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
  relatedHabits: HabitT[] | null;
  ifDontFinish: TodoIfDontFinishT;
  subTasks: TodoSubTaskT[] | null;
}

export type TodosByTypeT = Record<TodoTypeT, TodoT[]>;

export type TodosAnalysisT = Record<
  TodoTypeT,
  { all: number; done: number; unFinished: number; }
>;