"use client";

import Link from "next/link";
import { CheckSquareIcon, ListIcon, NotebookPenIcon } from "lucide-react";

import useActiveHref from "@/hooks/useActiveHref/useActiveHref";
import FloatingAIButton from "../FloatingAIButton/FloatingAIButton";
import RotueProtector from "@/components/modules/RotueProtector/RotueProtector";

function MobileNav() {
  const checkHref = useActiveHref();

  return (
    <RotueProtector routes={["/land/box"]}>
      <div className="mt-42" />

      <nav className="h-20 border-t-2 border-background-thin flex items-center justify-center z-40 fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm">
        <Link
          href={"/land/todos"}
          className={`h-full w-1/3 flex items-center justify-center flex-col gap-1.5 transition-colors
          ${checkHref("/land/todos") ? "active:text-foreground-thin" : "text-foreground-thin active:text-foreground"}`}
        >
          <CheckSquareIcon className="element-icon-size" />
          <span className="sub-text">Todos</span>
        </Link>
        <Link
          href={"/land/habits"}
          className={`h-full w-1/3 flex items-center justify-center flex-col gap-1.5 transition-colors
          ${checkHref("/land/habits") ? "active:text-foreground-thin" : "text-foreground-thin active:text-foreground"}`}
        >
          <ListIcon className="element-icon-size" />
          <span className="sub-text">Habits</span>
        </Link>
        <Link
          href={"/land/experiences"}
          className={`h-full w-1/3 flex items-center justify-center flex-col gap-1.5 transition-colors
          ${checkHref("/land/experiences") ? "active:text-foreground-thin" : "text-foreground-thin active:text-foreground"}`}
        >
          <NotebookPenIcon className="element-icon-size" />
          <span className="sub-text">Experiences</span>
        </Link>
        {/* NOTE: for future */}
        {/* <Link
          href={"/land/box"}
          className={`h-full w-1/3 flex items-center justify-center flex-col gap-1.5 transition-colors
          ${checkHref("/land/box") ? "active:text-foreground-thin" : "text-foreground-thin active:text-foreground"}`}
        >
          <BoxIcon className="element-icon-size" />
          <span className="sub-text">Box</span>
        </Link> */}

        <FloatingAIButton />
      </nav>
    </RotueProtector>
  )
}

export default MobileNav