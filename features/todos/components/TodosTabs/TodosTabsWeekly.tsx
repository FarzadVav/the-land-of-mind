import { TODOS } from "../../mockData";
import { getCurrentWeek } from "@/lib/date";
import TodosList from "../TodosList/TodosList";

type TodosTabsWeeklyPropsT = {
  historyMode?: boolean;
}

function TodosTabsWeekly({ historyMode }: TodosTabsWeeklyPropsT) {
  return (
    <>
      <p className="text-center text-foreground-thin mb-6 mt-3">
        {getCurrentWeek()}
      </p>

      <TodosList historyMode={historyMode} todoType="weekly" todosListData={TODOS.data} />
    </>
  )
}

export default TodosTabsWeekly;