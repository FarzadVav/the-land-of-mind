import { HabitIngageT } from "./types";
import { ConstantT } from "@/types/app.types";

export const HABIT_INGAGES: ConstantT<HabitIngageT>[] = [
  { name: "Per Day", value: "day" },
  { name: "Per Week", value: "week" },
  { name: "Per Month", value: "month" },
];