import { TodosByTypeT, TodoT, TodoTypeT } from "./todos.types";
import { HABITS } from "@/features/habits/lib/habits.constants";
import { ApiResponseT, ConstantT } from "../../general/lib/general.types";

export const TODOS: ApiResponseT<TodoT[]> = {
  data: [
    {
      id: 1,
      title: "Go to the gym",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "daily",
      subTasks: [
        { id: 1, title: "Signin to a gym", isDone: true },
        { id: 2, title: "Buy creatin powder", isDone: true },
        { id: 3, title: "Find a gym bro", isDone: false },
      ],
      relatedHabits: [
        HABITS.data[0],
        HABITS.data[1]
      ]
    },
    {
      id: 2,
      title: "Call Reyhoon",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "daily",
      subTasks: null,
      relatedHabits: [
        HABITS.data[1]
      ]
    },
    {
      id: 3,
      title: "Clean the home",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "weekly",
      subTasks: null,
      relatedHabits: [
        HABITS.data[0],
        HABITS.data[2]
      ]
    },
    {
      id: 4,
      title: "Send CV for 25 companies",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "weekly",
      subTasks: null,
      relatedHabits: [
        HABITS.data[1],
        HABITS.data[2]
      ]
    },
    {
      id: 5,
      title: "Buy two hoodies",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "monthly",
      subTasks: null,
      relatedHabits: [
        HABITS.data[2]
      ]
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
      type: "monthly",
      subTasks: null,
      relatedHabits: [
        HABITS.data[0],
        HABITS.data[1],
        HABITS.data[2],
      ]
    },
    {
      id: 7,
      title: "Employment at a company",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "annual",
      subTasks: null,
      relatedHabits: null
    },
    {
      id: 8,
      title: "Buy iPhone 17 Pro Max",
      isDone: false,
      doneAt: null,
      deadline: new Date().toLocaleString(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus consequuntur possimus placeat repudiandae illo reprehenderit aperiam tempora neque voluptates, dolorum quos porro",
      type: "annual",
      subTasks: null,
      relatedHabits: null
    }
  ],
  errors: null
};

export const TODOS_BY_TYPE: ApiResponseT<TodosByTypeT> = {
  data: {
    daily: [
      TODOS.data[0],
      TODOS.data[1]
    ],
    weekly: [
      TODOS.data[2],
      TODOS.data[3]
    ],
    monthly: [
      TODOS.data[4],
      TODOS.data[5]
    ],
    annual: [
      TODOS.data[6],
      TODOS.data[7]
    ]
  },
  errors: null
}

export const TODO_TYPES: ConstantT<TodoTypeT>[] = [
  { name: "Daily", value: "daily" },
  { name: "Weekly", value: "weekly" },
  { name: "Monthly", value: "monthly" },
  { name: "Annual", value: "annual" }
];