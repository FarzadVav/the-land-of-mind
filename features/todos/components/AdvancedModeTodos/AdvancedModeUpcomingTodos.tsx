import { TODOS } from "../../mockData";
import TodosList from "../TodosList/TodosList";

function AdvancedModeUpcomingTodos() {
  return (
    <TodosList todosListData={TODOS.data} />
  )
}

export default AdvancedModeUpcomingTodos;