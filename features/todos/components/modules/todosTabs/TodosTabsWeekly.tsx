import TodosList from "../todosList/TodosList";
import { TODOS_BY_TYPE } from "@/features/todos/lib/todos.constants";
import { getCurrentWeek } from "@/features/general/lib/general.utils";

type TodosTabsWeeklyPropsT = {
  historyMode?: boolean;
}

function TodosTabsWeekly({ historyMode }: TodosTabsWeeklyPropsT) {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentWeek()}
      </p>

      <TodosList historyMode={historyMode} todoType="weekly" todosListData={TODOS_BY_TYPE.data.weekly} />
    </>
  )
}

export default TodosTabsWeekly;