import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { TODOS } from "../../mockData";
import { getCurrentYear } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

function TodosTabsAnnual() {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentYear()}
      </p>

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

export default TodosTabsAnnual;