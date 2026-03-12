import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";

function AdvancedModeFutureTodos() {
  return (
    <>
      <TodosList todosListData={TODOS.data} />

      <Link
        href={"/land/todos/history?mode=future"}
        className="btn btn-soft element-rounded-full mx-auto mt-12"
      >
        <span>Future todos History</span>
        <ArrowRightIcon className="element-icon-size" />
      </Link>
    </>
  )
}

export default AdvancedModeFutureTodos;