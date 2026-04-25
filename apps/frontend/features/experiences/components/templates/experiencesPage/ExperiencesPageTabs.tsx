"use client";

import Link from "next/link";
import { EditIcon } from "lucide-react";
import { PaginationWithSearchParams } from "@kadoui/react";

import ExperiencesList from "../../modules/experiencesList/ExperiencesList";
import { EXPERIENCES_BY_CATEGORY } from "../../../lib/experiences.constants";

function ExperiencesPageTabs() {
  const PAGES = EXPERIENCES_BY_CATEGORY.data.map(item => ({
    name: item.category.title,
    component: <ExperiencesList experienceCategory={item.category} experiencesData={item.experiences} />
  }));

  return (
    // TODO: add preventHistoryMode to PaginationWithSearchParams
    <PaginationWithSearchParams className="wrapper" pages={PAGES} pageKey="category">
      <div className="flex items-center gap-3 overflow-x-auto pb-3">
        <div className="join join-border">
          <PaginationWithSearchParams.Counts
            enableNextClick
            // TODO: add min-w-max to kadoui-tailwindcss btn class
            className="btn data-[state=true]:btn-fill data-[state=false]:btn-soft element-rounded-full flex-1 min-w-max"
          >
            {
              (count) => (
                <span>{PAGES[count - 1].name}</span>
              )
            }
          </PaginationWithSearchParams.Counts>
        </div>
        <Link
          href={"/land/experiences/categories"}
          className="btn btn-soft element-rounded-full flex-1 min-w-max palette-primary"
        >
          <span>Edit Categories</span>
          <EditIcon className="element-icon-size" />
        </Link>
      </div>

      <div className="mt-3">
        <PaginationWithSearchParams.Pages />
      </div>
    </PaginationWithSearchParams>
  )
}

export default ExperiencesPageTabs