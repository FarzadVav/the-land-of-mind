"use client";

import { PaginationWithSearchParams } from "@kadoui/react";

import TodosTabsDaily from "./TodosTabsDaily";
import TodosTabsWeekly from "./TodosTabsWeekly";
import TodosTabsMonthly from "./TodosTabsMonthly";
import TodosTabsFuture from "./TodosTabsFuture";
import TodosTabsAnnual from "./TodosTabsAnnual";

type TodosTabsPropsT = {
  historyMode?: boolean;
}

function TodosTabs({ historyMode }: TodosTabsPropsT) {
  const PAGES = [
    {
      name: "Daily",
      component: <TodosTabsDaily historyMode={historyMode} />
    },
    {
      name: "Weekly",
      component: <TodosTabsWeekly historyMode={historyMode} />
    },
    {
      name: "Monthly",
      component: <TodosTabsMonthly historyMode={historyMode} />
    },
    {
      name: "Annual",
      component: <TodosTabsAnnual historyMode={historyMode} />
    },
    {
      name: "Future",
      component: <TodosTabsFuture historyMode={historyMode} />
    },
  ];

  return (
    // TODO: add preventHistoryMode to PaginationWithSearchParams
    <PaginationWithSearchParams className="wrapper" pages={PAGES} pageKey="type">
      <div className="flex items-center join join-border overflow-x-auto pb-3">
        <PaginationWithSearchParams.Counts
          enableNextClick
          className="btn data-[state=true]:btn-fill data-[state=false]:btn-soft element-rounded-full flex-1 min-w-max"
        >
          {
            (count) => (
              <span>{PAGES[count - 1].name}</span>
            )
          }
        </PaginationWithSearchParams.Counts>
      </div>

      <div className="mt-3">
        <PaginationWithSearchParams.Pages />
      </div>
    </PaginationWithSearchParams>
  )
}

export default TodosTabs;