"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@kadoui/react/utils";

import { HABITS } from "../../mockData";
import HabitCard from "../HabitCard/HabitCard";
import EmptyHabitCard from "../EmptyHabitCard/EmptyHabitCard";

function HabitsList({ className }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "wrapper space-y-3",
      className
    )}>
      {HABITS.data.length ? (
        <>
          {
            HABITS.data.map(item => (
              <HabitCard key={item.id} habitData={item} />
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
        <EmptyHabitCard />
      )}
    </div>
  )
}

export default HabitsList;