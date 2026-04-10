import TodosList from "../todosList/TodosList";
import { TODOS_BY_TYPE } from "../../../mockData";

type TodosTabsFuturePropsT = {
  historyMode?: boolean;
}

function TodosTabsFuture({ historyMode }: TodosTabsFuturePropsT) {
  return (
    <>
      <TodosList historyMode={historyMode} todoType="future" todosListData={TODOS_BY_TYPE.data.future} />
    </>
  )
}

export default TodosTabsFuture;