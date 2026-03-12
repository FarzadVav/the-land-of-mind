import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";

function AdvancedModeUpcomingTodos() {
  return (
    <>
      <TodosList todosListData={TODOS.data} />

      <Link
        href={"/land/todos/history?mode=upcoming"}
        className="btn btn-soft element-rounded-full mx-auto mt-12"
      >
        <span>Upcoming todos History</span>
        <ArrowRightIcon className="element-icon-size" />
      </Link>
    </>
  )
}

export default AdvancedModeUpcomingTodos;