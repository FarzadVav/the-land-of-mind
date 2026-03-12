import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";

import { TodoT } from "../../types";
import TodoCard from "../TodoCard/TodoCard";

type TodosListPropsT = ComponentProps<"div"> & {
  todosListData: TodoT[];
}

function TodosList({ className, todosListData }: TodosListPropsT) {
  return (
    <div className={cn(
      "space-y-3",
      className
    )}>
      {todosListData.map(item => (
        <TodoCard key={item.id} todoData={item} />
      ))}
    </div>
  )
}

export default TodosList;