import Link from "next/link";
import { ComponentProps } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@kadoui/react/utils";

function EmptyExperienceCard({ className }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "card card-y border-2 border-dashed border-background-thin",
      className
    )}>
      <h6 className="title text-center">
        Experiences Is Empty
      </h6>
      <Link
        href="/land/experiences/new"
        className="btn btn-soft element-rounded-full mx-auto palette-primary"
      >
        <span>Add First Experience</span>
        <PlusIcon className="element-icon-size" />
      </Link>
    </div>
  )
}

export default EmptyExperienceCard