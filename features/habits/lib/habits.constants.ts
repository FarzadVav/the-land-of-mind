import { HabitIngageT, HabitT } from "./habits.types";
import { ApiResponseT, ConstantT } from "../../general/lib/general.types";

export const HABIT_INGAGES: ConstantT<HabitIngageT>[] = [
  { name: "Per Day", value: "day" },
  { name: "Per Week", value: "week" },
  { name: "Per Month", value: "month" },
];

export const HABITS: ApiResponseT<HabitT[]> = {
  data: [
    {
      id: 1,
      title: "Wake up at 05:00 am",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      ingage: "day"
    },
    {
      id: 2,
      title: "Read English language",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      ingage: "week"
    },
    {
      id: 3,
      title: "Eat D3000 Vitamin",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      ingage: "month"
    }
  ],
  errors: null
};