import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";

function AdvancedModeAnnualTodos() {
  return (
    <>
      <TodosList todosListData={TODOS.data} />

      <Link
        href={"/land/todos/history?mode=annual"}
        className="btn btn-soft element-rounded-full mx-auto mt-12"
      >
        <span>Annual todos History</span>
        <ArrowRightIcon className="element-icon-size" />
      </Link>
    </>
  )
}

export default AdvancedModeAnnualTodos;