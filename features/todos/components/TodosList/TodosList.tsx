"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { useSearchParams } from "next/navigation";
import { ArrowRightIcon, PlusIcon } from "lucide-react";

import { getTodoType } from "../../utils";
import TodoCard from "../TodoCard/TodoCard";
import { TodoT, TodoTypeT } from "../../types";
import EmptyTodoCard from "../EmptyTodoCard/EmptyTodoCard";

type TodosListPropsT = ComponentProps<"div"> & {
  todoType: TodoTypeT;
  historyMode?: boolean;
  todosListData: TodoT[];
}

function TodosList({ className, todosListData, todoType, historyMode }: TodosListPropsT) {
  const sp = useSearchParams();

  const spMode = sp.get("mode");

  return (
    <div className={cn(
      "space-y-3",
      className
    )}>
      {todosListData.length ? (
        <>
          {
            todosListData.map(item => (
              <TodoCard historyMode={historyMode} key={item.id} todoData={item} />
            ))
          }

          {
            historyMode ? null : (
              <>
                <Link
                  href={`/land/todos/history?mode=${spMode}`}
                  className="btn btn-soft element-rounded-full mx-auto mt-6"
                >
                  <span>{getTodoType(todoType)} Todos History</span>
                  <ArrowRightIcon className="element-icon-size" />
                </Link>

                <Link
                  href={`/land/todos/new?type=${getTodoType(todoType).toLowerCase()}`}
                  className="btn btn-soft element-rounded-full palette-primary mx-auto mt-3"
                >
                  <span>New {getTodoType(todoType)} Todo</span>
                  <PlusIcon className="element-icon-size" />
                </Link>
              </>
            )
          }
        </>
      ) : (
        <EmptyTodoCard todoType={todoType} />
      )}
    </div>
  )
}

export default TodosList;