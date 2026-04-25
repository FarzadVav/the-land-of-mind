"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@kadoui/react/utils";

import ExperiencesCard from "../experiencesCard/ExperiencesCard";
import ExperiencesEmptyCard from "../experiencesEmptyCard/ExperiencesEmptyCard";
import { ExperienceCategoryT, ExperienceT } from "../../../lib/experiences.types";

type ExperiencesListPropsT = ComponentProps<"div"> & {
  experiencesData: ExperienceT[];
  experienceCategory: ExperienceCategoryT;
}

function ExperiencesList({ className, experienceCategory, experiencesData }: ExperiencesListPropsT) {
  return (
    <div className={cn(
      "space-y-3",
      className
    )}>
      {experiencesData.length ? (
        <>
          {
            experiencesData.map(item => (
              <ExperiencesCard key={item.id} experienceData={item} />
            ))
          }

          <Link
            href={`/land/experiences/new?category=${experienceCategory.id}`}
            className="btn btn-soft element-rounded-full palette-primary mx-auto mt-3"
          >
            <span>New {experienceCategory.title} Experience</span>
            <PlusIcon className="element-icon-size" />
          </Link>
        </>
      ) : (
        <ExperiencesEmptyCard experienceCategory={experienceCategory} />
      )}
    </div>
  )
}

export default ExperiencesList;