import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";

type TodosTabsFuturePropsT = {
  historyMode?: boolean;
}

function TodosTabsFuture({ historyMode }: TodosTabsFuturePropsT) {
  return (
    <>
      <TodosList historyMode={historyMode} todoType="future" todosListData={TODOS.data} />
    </>
  )
}

export default TodosTabsFuture;