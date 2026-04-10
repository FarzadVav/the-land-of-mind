import Link from "next/link";
import { Sheet } from "@kadoui/react";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { EditIcon, MoreVerticalIcon, Trash2Icon } from "lucide-react";

import { ExperienceT } from "../../../lib/experiences.types";
import { getDetailDate } from "@/features/general/lib/general.utils";

type ExperienceCardPropsT = ComponentProps<"div"> & {
  experienceData: ExperienceT;
}

function ExperienceCard({ experienceData, className }: ExperienceCardPropsT) {
  return (
    <div
      className={cn(
        "card card-x border border-background-thin",
        className
      )}
    >
      <p>
        {experienceData.title}
      </p>
      <Sheet>
        <Sheet.Toggle   >
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
                  <p className="text-foreground-thin">{experienceData.title}</p>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <p className="title">Category</p>
                  <p className="text-foreground-thin">
                    {experienceData.category.title}
                  </p>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <p className="title">Create date</p>
                  <p className="text-foreground-thin">{getDetailDate(experienceData.createdAt)}</p>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <p className="title">Description</p>
                  <p className="text-foreground-thin">{experienceData.description}</p>
                </div>
              </div>

              <div className="flex gap-1.5 mt-12">
                <button className="btn btn-soft element-rounded-full palette-error w-1/2">
                  <Trash2Icon className="element-icon-size" />
                </button>
                <Link
                  href={`/land/experiences/${experienceData.id}`}
                  className="btn btn-soft element-rounded-full palette-primary w-1/2"
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

export default ExperienceCard;