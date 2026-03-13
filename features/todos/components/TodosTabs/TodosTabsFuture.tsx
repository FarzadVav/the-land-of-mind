import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";

function TodosTabsFuture() {
  return (
    <>
      <TodosList todoType="future" todosListData={TODOS.data} />
    </>
  )
}

export default TodosTabsFuture;