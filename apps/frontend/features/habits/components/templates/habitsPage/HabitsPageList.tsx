"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@kadoui/react/utils";

import HabitsCard from "../../modules/habitsCard/HabitsCard";
import HabitEmptyCard from "../habitEmptyCard/HabitEmptyCard";
import { HABITS } from "@/features/habits/lib/habits.constants";

function HabitsPageList({ className }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "wrapper space-y-3",
      className
    )}>
      {HABITS.data.length ? (
        <>
          {
            HABITS.data.map(item => (
              <HabitsCard key={item.id} habitData={item} />
            ))
          }

          <Link
            href="/land/habits/new"
            className="btn btn-soft element-rounded-full palette-primary mx-auto mt-3"
          >
            <span>New Habit</span>
            <PlusIcon className="element-icon-size" />
          </Link>
        </>
      ) : (
        <HabitEmptyCard />
      )}
    </div>
  )
}

export default HabitsPageList;