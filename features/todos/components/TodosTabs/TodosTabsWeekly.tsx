import { TODOS } from "../../mockData";
import { getCurrentWeek } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

function TodosTabsWeekly() {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentWeek()}
      </p>

      <TodosList todoType="weekly" todosListData={TODOS.data} />
    </>
  )
}

export default TodosTabsWeekly;