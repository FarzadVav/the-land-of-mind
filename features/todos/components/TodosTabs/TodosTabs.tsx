"use client";

import { PaginationWithSearchParams } from "@kadoui/react";

import TodosTabsDaily from "./TodosTabsDaily";
import TodosTabsWeekly from "./TodosTabsWeekly";
import TodosTabsMonthly from "./TodosTabsMonthly";
import TodosTabsFuture from "../TodosTabs/TodosTabsFuture";
import TodosTabsAnnual from "../TodosTabs/TodosTabsAnnual";

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
    <PaginationWithSearchParams className="wrapper" pages={PAGES} pageKey="mode">
      <div className="flex items-center join join-border overflow-x-auto pb-3">
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

      <div className="mt-3">
        <PaginationWithSearchParams.Pages />
      </div>
    </PaginationWithSearchParams>
  )
}

export default TodosTabs