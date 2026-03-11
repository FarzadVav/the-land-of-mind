"use client";

import Link from "next/link";
import { UserIcon } from "lucide-react";
import { PropsWithChildren } from "react";

import useActiveHref from "@/hooks/useActiveHref/useActiveHref";

function MobileBarRoot({ children }: PropsWithChildren) {
  const checkHref = useActiveHref();

  return (
    <header className="wrapper sticky top-6 mt-6">
      <div className="h-(--element-xl-size) bg-background/90 backdrop-blur-sm flex items-center rounded-full border-2 border-background-thin mb-6 relative">
        {checkHref("/land/profile") ? null : (
          <Link
            href={"/land/profile"}
            className="btn btn-ghost element-square-size element-rounded-full element-sm absolute right-3"
          >
            <UserIcon className="element-icon-size" />
          </Link>
        )}

        {children}
      </div>
    </header>
  )
}

export default MobileBarRoot;