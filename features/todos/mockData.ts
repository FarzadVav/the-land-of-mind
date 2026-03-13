import { TodoT } from "./types";
import { ApiResponseT } from "@/types/app.types";

export const TODOS: ApiResponseT<TodoT[]> = {
  data: [
    {
      id: 1,
      title: "Reach the 90kg body",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "daily", // Should be dynamic
      subTasks: [
        { id: 1, title: "Signin to a gym", isDone: true },
        { id: 2, title: "Buy creatin powder", isDone: true },
        { id: 3, title: "Find a gym bro", isDone: false },
      ]
    },
    {
      id: 2,
      title: "Learn Java and Kotling languages",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "daily", // Should be dynamic
      subTasks: null
    },
    {
      id: 3,
      title: "Buy iPhone 17 Pro Max",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "daily", // Should be dynamic
      subTasks: null
    },
    {
      id: 4,
      title: "Finish the project",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "daily", // Should be dynamic
      subTasks: null
    },
    {
      id: 5,
      title: "Get the salary from company",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "daily", // Should be dynamic
      subTasks: null
    },
    {
      id: 6,
      title: "Repair the car",
      isDone: true,
      doneAt: new Date().toLocaleString(),
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "daily", // Should be dynamic
      subTasks: null
    },
  ],
  errors: null
};