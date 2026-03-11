"use client";

import Link from "next/link";
import { CheckSquareIcon, ListIcon, NotebookPenIcon, UserCircleIcon } from "lucide-react";

import useActiveHref from "@/hooks/useActiveHref/useActiveHref";

function MobileNav() {
  const checkHref = useActiveHref();

  return (
    <nav className="h-20 border-t-2 border-background-thin flex items-center justify-center z-40 fixed bottom-0 left-0 right-0">
      <Link
        href={"/land/todos"}
        className={`h-full w-1/3 flex items-center justify-center flex-col gap-1.5
          ${checkHref("/land/todos") ? "" : "text-foreground-thin"}`}
      >
        <CheckSquareIcon className="element-icon-size" />
        <span className="sub-text">Todos</span>
      </Link>
      <Link
        href={"/land/habits"}
        className={`h-full w-1/3 flex items-center justify-center flex-col gap-1.5
          ${checkHref("/land/habits") ? "" : "text-foreground-thin"}`}
      >
        <ListIcon className="element-icon-size" />
        <span className="sub-text">Habits</span>
      </Link>
      <Link
        href={"/land/experiences"}
        className={`h-full w-1/3 flex items-center justify-center flex-col gap-1.5
          ${checkHref("/land/experiences") ? "" : "text-foreground-thin"}`}
      >
        <NotebookPenIcon className="element-icon-size" />
        <span className="sub-text">Experiences</span>
      </Link>
      <Link
        href={"/land/profile"}
        className={`h-full w-1/3 flex items-center justify-center flex-col gap-1.5
          ${checkHref("/land/profile") ? "" : "text-foreground-thin"}`}
      >
        <UserCircleIcon className="element-icon-size" />
        <span className="sub-text">Profile</span>
      </Link>
    </nav>
  )
}

export default MobileNav