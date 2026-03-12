import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";

function AdvancedModeFutureTodos() {
  return (
    <TodosList todosListData={TODOS.data} />
  )
}

export default AdvancedModeFutureTodos;