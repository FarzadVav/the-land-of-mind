import { TodoT } from "./types";
import { ApiResponseT } from "@/types/app.types";

export const TODOS: ApiResponseT<TodoT[]> = {
  data: [
    {
      id: 1,
      title: "Reach the 90kg body",
      deadline: new Date().toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      mode: "daily", // Should be dynamic
      subTasks: [
        { id: 1, title: "Signin to a gym" },
        { id: 2, title: "Buy creatin powder" },
        { id: 3, title: "Find a gym bro" },
      ]
    },
    {
      id: 2,
      title: "Learn Java and Kotling languages",
      deadline: new Date().toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      mode: "daily", // Should be dynamic
      subTasks: null
    },
    {
      id: 3,
      title: "Buy iPhone 17 Pro Max",
      deadline: new Date().toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      mode: "daily", // Should be dynamic
      subTasks: null
    },
    {
      id: 4,
      title: "Finish the project",
      deadline: new Date().toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      mode: "daily", // Should be dynamic
      subTasks: null
    },
    {
      id: 5,
      title: "Get the salary from company",
      deadline: new Date().toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      mode: "daily", // Should be dynamic
      subTasks: null
    },
    {
      id: 6,
      title: "Repair the car",
      deadline: new Date().toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      mode: "daily", // Should be dynamic
      subTasks: null
    },
  ],
  errors: null
};