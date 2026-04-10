export type HabitIngageT = "day" | "week" | "month";

export type HabitT = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  description: string | null;

  ingage: HabitIngageT;
}