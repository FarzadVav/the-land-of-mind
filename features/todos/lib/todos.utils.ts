import { TodoTypeT } from "./todos.types";

export const getTodoType = (todoType: TodoTypeT) => {
  switch (todoType) {
    case "daily": {
      return "Daily"
    }

    case "weekly": {
      return "Weekly"
    }

    case "monthly": {
      return "Monthly"
    }

    case "annual": {
      return "Annual"
    }

    default: {
      return "";
    }
  }
}