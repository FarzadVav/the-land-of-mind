import Link from "next/link";
import { ComponentProps } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@kadoui/react/utils";

import { TodoTypeT } from "../../types";
import { getTodoType } from "../../utils";

type EmptyTodoCardPropsT = ComponentProps<"div"> & {
  todoType: TodoTypeT;
}

function EmptyTodoCard({ className, todoType }: EmptyTodoCardPropsT) {
  return (
    <div className={cn(
      "card card-y border-2 border-dashed border-background-thin",
      className
    )}>
      <h6 className="title text-center">
        {getTodoType(todoType)} Todos Is Empty
      </h6>
      <Link
        href={`/land/todos/new?type=${getTodoType(todoType).toLowerCase()}`}
        className="btn btn-soft element-rounded-full mx-auto palette-primary"
      >
        <span>Add {getTodoType(todoType)} Todo</span>
        <PlusIcon className="element-icon-size" />
      </Link>
    </div>
  )
}

export default EmptyTodoCard