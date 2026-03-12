"use client";

import { PaginationWithSearchParams } from "@kadoui/react";

import AdvancedModeAnnualTodos from "./AdvancedModeAnnualTodos";
import AdvancedModeFutureTodos from "./AdvancedModeFutureTodos";
import AdvancedModeUpcomingTodos from "./AdvancedModeUpcomingTodos";

const PAGES = [
  {
    name: "Upcoming",
    component: <AdvancedModeUpcomingTodos />
  },
  {
    name: "Annual",
    component: <AdvancedModeAnnualTodos />
  },
  {
    name: "Future",
    component: <AdvancedModeFutureTodos />
  },
]

function AdvancedModeTodos() {
  return (
    <PaginationWithSearchParams className="wrapper" pages={PAGES} pageKey="mode">
      <div className="flex items-center join join-border">
        <PaginationWithSearchParams.Counts
          enableNextClick
          className="btn w-1/3 data-[state=true]:btn-fill data-[state=false]:btn-soft element-rounded-full"
        >
          {
            (count) => (
              <span>{PAGES[count - 1].name}</span>
            )
          }
        </PaginationWithSearchParams.Counts>
      </div>

      <div className="mt-6">
        <PaginationWithSearchParams.Pages />
      </div>
    </PaginationWithSearchParams>
  )
}

export default AdvancedModeTodos