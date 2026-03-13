import { TODOS } from "../../mockData";
import { getCurrentDay } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

function TodosTabsDaily() {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentDay()}
      </p>

      <TodosList todoType="daily" todosListData={TODOS.data} />
    </>
  )
}

export default TodosTabsDaily;