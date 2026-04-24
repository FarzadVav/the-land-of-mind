import { PlanPeriodT } from "@/features/general/lib/general.types";

export type HabitIngageT = Exclude<PlanPeriodT, "annual">;

export type HabitT = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string | null;

  ingage: HabitIngageT;
}