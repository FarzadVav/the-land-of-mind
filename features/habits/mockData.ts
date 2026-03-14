import { HabitT } from "./types";
import { ApiResponseT } from "@/types/app.types";

export const HABITS: ApiResponseT<HabitT[]> = {
  data: [
    {
      id: 1,
      title: "Wake up at 05:00 am",
      description: null
    },
    {
      id: 2,
      title: "Read 10 papers of a book",
      description: null
    },
    {
      id: 3,
      title: "Read English language",
      description: null
    },
  ],
  errors: null
};