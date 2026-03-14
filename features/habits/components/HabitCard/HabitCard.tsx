import Link from "next/link";
import { Sheet } from "@kadoui/react";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { CheckIcon, EditIcon, MoreVerticalIcon, Trash2Icon } from "lucide-react";

import { HabitT } from "../../types";
import { getDetailDate } from "@/lib/date";
import { HABIT_INGAGES } from "../../constants";

type HabitCardPropsT = ComponentProps<"div"> & {
  habitData: HabitT;
}

function HabitCard({ habitData, className }: HabitCardPropsT) {
  return (
    <div
      className={cn(
        "card card-x border border-background-thin",
        className
      )}
    >
      <p>
        {habitData.title}
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
                  <p className="text-foreground-thin">{habitData.title}</p>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <p className="title">Ingage</p>
                  <p className="text-foreground-thin">
                    Per {HABIT_INGAGES.find(item => item.value === habitData.ingage)?.name}
                  </p>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <p className="title">Create date</p>
                  <p className="text-foreground-thin">{getDetailDate(habitData.createdAt)}</p>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <p className="title">Last activity</p>
                  <p className="text-foreground-thin">{getDetailDate(habitData.updatedAt)}</p>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <p className="title">Description</p>
                  <p className="text-foreground-thin">{habitData.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 mt-12">
                {/* TODO: add nested Sheet.Body and show a DatePicker and TimePicker */}
                <button className="btn btn-soft element-rounded-full palette-success col-span-2 element-w-full">
                  <span>I Do This</span>
                  <CheckIcon className="element-icon-size" />
                </button>
                <button className="btn btn-soft element-rounded-full palette-error element-w-full">
                  <Trash2Icon className="element-icon-size" />
                </button>
                <Link
                  href={`/land/habits/${habitData.id}`}
                  className="btn btn-soft element-rounded-full palette-primary element-w-full"
                >
                  <EditIcon className="element-icon-size" />
                </Link>
              </div>
            </Sheet.Content>
          </Sheet.Body>
        </Sheet.Portal>
      </Sheet>
    </div>
  )
}

export default HabitCard;