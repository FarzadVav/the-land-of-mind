import { TODOS } from "../../mockData";
import { getCurrentYear } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

type TodosTabsAnnualPropsT = {
  historyMode?: boolean;
}

function TodosTabsAnnual({ historyMode }: TodosTabsAnnualPropsT) {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentYear()}
      </p>

      <TodosList historyMode={historyMode} todoType="annual" todosListData={TODOS.data} />
    </>
  )
}

export default TodosTabsAnnual;