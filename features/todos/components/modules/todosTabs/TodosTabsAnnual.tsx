import TodosList from "../todosList/TodosList";
import { getCurrentYear } from "@/features/general/lib/general.utils";
import { TODOS_BY_TYPE } from "@/features/todos/lib/todos.constants";

type TodosTabsAnnualPropsT = {
  historyMode?: boolean;
}

function TodosTabsAnnual({ historyMode }: TodosTabsAnnualPropsT) {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentYear()}
      </p>

      <TodosList historyMode={historyMode} todoType="annual" todosListData={TODOS_BY_TYPE.data.annual} />
    </>
  )
}

export default TodosTabsAnnual;