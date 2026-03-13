import { TODOS } from "../../mockData";
import { getCurrentMonth } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

type TodosTabsMonthlyPropsT = {
  historyMode?: boolean;
}

function TodosTabsMonthly({ historyMode }: TodosTabsMonthlyPropsT) {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentMonth()}
      </p>

      <TodosList historyMode={historyMode} todoType="monthly" todosListData={TODOS.data} />
    </>
  )
}

export default TodosTabsMonthly;