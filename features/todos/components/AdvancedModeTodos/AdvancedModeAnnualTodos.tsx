import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";

function AdvancedModeAnnualTodos() {
  return (
    <TodosList todosListData={TODOS.data} />
  )
}

export default AdvancedModeAnnualTodos;