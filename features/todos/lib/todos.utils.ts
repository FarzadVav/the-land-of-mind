import { TodoIfDontFinishT, TodoTypeT } from "./todos.types";

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

export const getTodoIfDontFinishOptions =
  (todoType: TodoTypeT): {
    title: string;
    ifDontFinish: TodoIfDontFinishT;
  }[] => {
    switch (todoType) {
      case "daily": {
        return [
          { title: "Move to history", ifDontFinish: "history" },
          { title: "Extend to next day", ifDontFinish: "extend" },
        ];
      }

      case "weekly": {
        return [
          { title: "Forward to daily", ifDontFinish: "forward" },
          { title: "Move to history", ifDontFinish: "history" },
          { title: "Extend to next week", ifDontFinish: "extend" },
        ];
      }

      case "monthly": {
        return [
          { title: "Forward to weekly", ifDontFinish: "forward" },
          { title: "Move to history", ifDontFinish: "history" },
          { title: "Extend to next month", ifDontFinish: "extend" },
        ];
      }

      case "annual": {
        return [
          { title: "Forward to monthly", ifDontFinish: "forward" },
          { title: "Move to history", ifDontFinish: "history" },
          { title: "Extend to next year", ifDontFinish: "extend" },
        ];
      }
    }
  }