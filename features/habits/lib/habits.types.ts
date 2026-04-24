import { PeriodT } from "@/features/general/lib/general.types";

export type HabitIngageT = Exclude<PeriodT, "annual">;

export type HabitT = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  doingCount: number;
  description: string | null;

  ingage: HabitIngageT;
}