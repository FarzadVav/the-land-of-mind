import { ApiResponseT } from "@/types/app.types";
import { ExperienceByCategoryT, ExperienceCategoryT, ExperienceT } from "./types";

export const EXPERIENCE_CATEGORIES: ApiResponseT<ExperienceCategoryT[]> = {
  data: [
    { id: 1, title: "Communications" },
    { id: 2, title: "Business" },
    { id: 3, title: "Personal Management" },
  ],
  errors: null
}

export const EXPERIENCES_BY_CATEGORY: ApiResponseT<ExperienceByCategoryT[]> = {
  data: [
    {
      category: EXPERIENCE_CATEGORIES.data[0],
      experiences: [
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
          title: "Eye contact",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
          category: EXPERIENCE_CATEGORIES.data[0]
        },
        {
          id: 3,
          title: "Body language",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
          category: EXPERIENCE_CATEGORIES.data[0]
        }
      ]
    },
    {
      category: EXPERIENCE_CATEGORIES.data[1],
      experiences: [
        {
          id: 4,
          title: "Money management",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
          category: EXPERIENCE_CATEGORIES.data[1]
        },
        {
          id: 5,
          title: "Leadershipment",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
          category: EXPERIENCE_CATEGORIES.data[1]
        },
        {
          id: 6,
          title: "Controll the people",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
          category: EXPERIENCE_CATEGORIES.data[1]
        }
      ]
    },
    {
      category: EXPERIENCE_CATEGORIES.data[2],
      experiences: [
        {
          id: 7,
          title: "Time management",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
          category: EXPERIENCE_CATEGORIES.data[2]
        },
        {
          id: 8,
          title: "Sleep",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
          category: EXPERIENCE_CATEGORIES.data[2]
        },
        {
          id: 9,
          title: "Perfectionism",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
          category: EXPERIENCE_CATEGORIES.data[2]
        }
      ]
    },
  ],
  errors: null
};