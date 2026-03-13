import Link from "next/link";
import { Sheet } from "@kadoui/react";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { CheckIcon, EditIcon, MoreVerticalIcon, Trash2Icon } from "lucide-react";

import { TodoT } from "../../types";
import { getTodoDate } from "@/lib/date";

type TodoCardPropsT = ComponentProps<"div"> & {
  todoData: TodoT;
  historyMode?: boolean;
}

function TodoCard({ todoData, historyMode, className }: TodoCardPropsT) {
  return (
    <div
      className={cn(
        "card card-y border border-background-thin",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className={todoData.isDone ? "line-through text-foreground-thin" : ""}>
          {todoData.title}
        </p>
        <Sheet>
          <Sheet.Toggle className="btn btn-ghost element-square-size element-rounded-full shrink-0">
            <MoreVerticalIcon className="element-icon-size" />
          </Sheet.Toggle>

          <Sheet.Portal className="sheet-portal">
            <Sheet.Body className="sheet-body">
              <Sheet.Header className="sheet-header">
                <Sheet.Handlebar className="sheet-handlebar" />
              </Sheet.Header>

              <Sheet.Content className="sheet-content">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <p className="title">Title</p>
                    <p className={`text-foreground-thin ${todoData.isDone ? "line-through" : ""}`}>{todoData.title}</p>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <p className="title">Deadline</p>
                    <p className="text-foreground-thin">{getTodoDate(todoData.deadline)}</p>
                  </div>
                  {todoData.isDone && todoData.doneAt ? (
                    <div className="flex items-start justify-between gap-3">
                      <p className="title text-primary">Done At</p>
                      <p className="text-foreground-thin">{getTodoDate(todoData.doneAt)}</p>
                    </div>
                  ) : null}
                  <div className="flex items-start justify-between gap-3">
                    <p className="title">Create date</p>
                    <p className="text-foreground-thin">{getTodoDate(todoData.createdAt)}</p>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <p className="title">Last update</p>
                    <p className="text-foreground-thin">{getTodoDate(todoData.updatedAt)}</p>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <p className="title">Description</p>
                    <p className="text-foreground-thin">{todoData.description}</p>
                  </div>
                </div>

                <p className="title mt-12">Sub Tasks:</p>
                <div className="space-y-3 mt-3">
                  {todoData.subTasks?.length ? todoData.subTasks.map(item => (
                    <div key={item.id} className="card card-x border border-background-thin element-sm">
                      <p className={item.isDone ? "line-through text-foreground-thin" : ""}>
                        {item.title}
                      </p>
                      {item.isDone ? (
                        <button className="btn btn-fill element-square-size element-rounded-full element-xs shrink-0">
                          <CheckIcon className="element-icon-size" />
                        </button>
                      ) : (
                        <button className="btn btn-outline element-square-size element-rounded-full element-xs"></button>
                      )}
                    </div>
                  )) : (
                    <div className="card card-x justify-center border-2 border-dashed border-background-thin">
                      <p>Nothing</p>
                    </div>
                  )}
                </div>

                {historyMode ? (
                  <button className="btn btn-soft element-w-full mt-12 element-rounded-full palette-error">
                    <span>Delete For Ever</span>
                    <Trash2Icon className="element-icon-size" />
                  </button>
                ) : (
                  <div className="flex mt-12 gap-1.5">
                    <button className={`btn btn-soft palette-error element-rounded-full ${todoData.isDone ? "element-w-full" : "w-1/3"}`}>
                      <Trash2Icon className="element-icon-size" />
                    </button>
                    {
                      todoData.isDone ? null : (
                        <>
                          <Link
                            href={`land/todos/${todoData.id}`}
                            className="btn w-1/3 btn-soft palette-primary element-rounded-full"
                          >
                            <EditIcon className="element-icon-size" />
                          </Link>
                          <button className="btn w-1/3 btn-soft palette-success element-rounded-full">
                            <CheckIcon className="element-icon-size" />
                          </button>
                        </>
                      )
                    }
                  </div>
                )}
              </Sheet.Content>
            </Sheet.Body>
          </Sheet.Portal>
        </Sheet>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <p className="sub-text">
          <span>Deadline:</span>{" "}
          <span className="text-foreground-thin">
            {getTodoDate(todoData.deadline)}
          </span>
        </p>
        {todoData.isDone && todoData.doneAt ? (
          <p className="sub-text">
            <span>Done at:</span>{" "}
            <span className="text-foreground-thin">
              {getTodoDate(todoData.doneAt)}
            </span>
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default TodoCard;