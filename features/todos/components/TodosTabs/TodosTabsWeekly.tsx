import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";
import { getCurrentWeek } from "@/lib/date";

function TodosTabsWeekly() {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentWeek()}
      </p>

      <TodosList todosListData={TODOS.data} />

      <Link
        href={"/land/todos/history?mode=weekly"}
        className="btn btn-soft element-rounded-full mx-auto mt-12"
      >
        <span>Weekly todos History</span>
        <ArrowRightIcon className="element-icon-size" />
      </Link>
    </>
  )
}

export default TodosTabsWeekly;