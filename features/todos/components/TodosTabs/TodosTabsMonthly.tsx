import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { TODOS } from "../../mockData";
import { getCurrentMonth } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

function TodosTabsMonthly() {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentMonth()}
      </p>

      <TodosList todosListData={TODOS.data} />

      <Link
        href={"/land/todos/history?mode=monthly"}
        className="btn btn-soft element-rounded-full mx-auto mt-12"
      >
        <span>Monthly todos History</span>
        <ArrowRightIcon className="element-icon-size" />
      </Link>
    </>
  )
}

export default TodosTabsMonthly;