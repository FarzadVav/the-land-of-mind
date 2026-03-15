"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@kadoui/react/utils";

import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { ExperienceCategoryT, ExperienceT } from "../../types";
import EmptyExperienceCard from "../EmptyExperienceCard/EmptyExperienceCard";

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
              <ExperienceCard key={item.id} experienceData={item} />
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
        <EmptyExperienceCard experienceCategory={experienceCategory} />
      )}
    </div>
  )
}

export default ExperiencesList;