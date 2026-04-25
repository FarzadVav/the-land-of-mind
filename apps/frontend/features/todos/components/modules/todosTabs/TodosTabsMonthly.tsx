import TodosList from "../todosList/TodosList";
import { TODOS_BY_TYPE } from "@/features/todos/lib/todos.constants";
import { getCurrentMonth } from "@/features/general/lib/general.utils";

type TodosTabsMonthlyPropsT = {
  historyMode?: boolean;
}

function TodosTabsMonthly({ historyMode }: TodosTabsMonthlyPropsT) {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentMonth()}
      </p>

      <TodosList historyMode={historyMode} todoType="monthly" todosListData={TODOS_BY_TYPE.data.monthly} />
    </>
  )
}

export default TodosTabsMonthly;