"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@kadoui/react/utils";

import { EXPERIENCES } from "../../mockData";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import EmptyExperienceCard from "../EmptyExperienceCard/EmptyExperienceCard";

function ExperiencesList({ className }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "wrapper space-y-3",
      className
    )}>
      {EXPERIENCES.data.length ? (
        <>
          {
            EXPERIENCES.data.map(item => (
              <ExperienceCard key={item.id} experienceData={item} />
            ))
          }

          <Link
            href="/land/experiences/new"
            className="btn btn-soft element-rounded-full palette-primary mx-auto mt-3"
          >
            <span>New Experience</span>
            <PlusIcon className="element-icon-size" />
          </Link>
        </>
      ) : (
        <EmptyExperienceCard />
      )}
    </div>
  )
}

export default ExperiencesList;