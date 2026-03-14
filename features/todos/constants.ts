import { TodoTypeT } from "./types";
import { ConstantT } from "@/types/app.types";

export const TODO_TYPES: ConstantT<TodoTypeT>[] = [
  { name: "Daily", value: "daily" },
  { name: "Weekly", value: "weekly" },
  { name: "Monthly", value: "monthly" },
  { name: "Annual", value: "annual" },
  { name: "Future", value: "future" },
];