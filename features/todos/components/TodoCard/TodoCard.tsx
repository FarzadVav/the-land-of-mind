import { Sheet } from "@kadoui/react";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { CheckIcon, EditIcon, MoreVerticalIcon, TrashIcon } from "lucide-react";

import { TodoT } from "../../types";
import Link from "next/link";

type TodoCardPropsT = ComponentProps<"div"> & {
  todoData: TodoT;
}

function TodoCard({ todoData, className }: TodoCardPropsT) {
  return (
    <div
      className={cn(
        "card card-y border border-background-thin",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p>
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
                    <p className="text-foreground-thin">{todoData.title}</p>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <p className="title">Deadline</p>
                    <p className="text-foreground-thin">{new Date(todoData.deadline).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <p className="title">Create date</p>
                    <p className="text-foreground-thin">{new Date(todoData.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <p className="title">Last update</p>
                    <p className="text-foreground-thin">{new Date(todoData.updatedAt).toLocaleDateString()}</p>
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
                      <p>{item.title}</p>
                      {/* <button className="btn btn-outline element-square-size element-rounded-full element-xs"></button> */}
                      <button className="btn btn-fill element-square-size element-rounded-full element-xs shrink-0">
                        <CheckIcon className="element-icon-size" />
                      </button>
                    </div>
                  )) : "Nothing"}
                </div>

                <div className="flex mt-12 gap-1.5">
                  <button className="btn w-1/3 btn-fill palette-error element-rounded-full">
                    <TrashIcon className="element-icon-size" />
                  </button>
                  <Link
                    href={`land/todos/${todoData.id}`}
                    className="btn w-1/3 btn-fill palette-primary element-rounded-full"
                  >
                    <EditIcon className="element-icon-size" />
                  </Link>
                  <button className="btn w-1/3 btn-fill palette-success element-rounded-full">
                    <CheckIcon className="element-icon-size" />
                  </button>
                </div>
              </Sheet.Content>
            </Sheet.Body>
          </Sheet.Portal>
        </Sheet>
      </div>
      <p className="sub-text">
        <span>Deadline:</span>{" "}
        <span className="text-foreground-thin">
          {new Date(todoData.deadline).toLocaleDateString()}
        </span>
      </p>
    </div>
  )
}

export default TodoCard;