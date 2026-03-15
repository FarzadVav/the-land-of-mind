import { ApiResponseT } from "@/types/app.types";
import { ExperienceCategoryT, ExperienceT } from "./types";

export const EXPERIENCE_CATEGORIES: ApiResponseT<ExperienceCategoryT[]> = {
  data: [
    { id: 1, title: "Communications" },
    { id: 2, title: "Business" },
    { id: 3, title: "Personal Management" },
  ],
  errors: null
}

export const EXPERIENCES: ApiResponseT<ExperienceT[]> = {
  data: [
    {
      id: 1,
      title: "Talk with smile",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      category: EXPERIENCE_CATEGORIES.data[0]
    },
    {
      id: 2,
      title: "How to manage the money?",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      category: EXPERIENCE_CATEGORIES.data[1]
    },
    {
      id: 3,
      title: "Wake up at 05:00 am",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      category: EXPERIENCE_CATEGORIES.data[2]
    }
  ],
  errors: null
};