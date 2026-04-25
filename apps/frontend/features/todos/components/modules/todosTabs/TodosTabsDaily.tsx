import TodosList from "../todosList/TodosList";
import { getCurrentDay } from "@/features/general/lib/general.utils";
import { TODOS_BY_TYPE } from "@/features/todos/lib/todos.constants";

type TodosTabsDailyPropsT = {
  historyMode?: boolean;
}

function TodosTabsDaily({ historyMode }: TodosTabsDailyPropsT) {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentDay()}
      </p>

      <TodosList historyMode={historyMode} todoType="daily" todosListData={TODOS_BY_TYPE.data.daily} />
    </>
  )
}

export default TodosTabsDaily;