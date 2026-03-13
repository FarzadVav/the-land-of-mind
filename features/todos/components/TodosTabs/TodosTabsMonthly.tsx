import { TODOS } from "../../mockData";
import { getCurrentMonth } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

function TodosTabsMonthly() {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentMonth()}
      </p>

      <TodosList todoType="monthly" todosListData={TODOS.data} />
    </>
  )
}

export default TodosTabsMonthly;