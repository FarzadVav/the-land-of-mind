import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { TODOS } from "../../mockData";
import { getCurrentDay } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

function TodosTabsDaily() {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentDay()}
      </p>

      <TodosList todosListData={TODOS.data} />

      <Link
        href={"/land/todos/history?mode=daily"}
        className="btn btn-soft element-rounded-full mx-auto mt-12"
      >
        <span>Daily Todos History</span>
        <ArrowRightIcon className="element-icon-size" />
      </Link>
    </>
  )
}

export default TodosTabsDaily;