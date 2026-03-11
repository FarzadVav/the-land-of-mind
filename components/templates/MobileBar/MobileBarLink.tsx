import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

type MobileBarLinkPropsT = ComponentProps<typeof Link> & {
  side?: "start" | "end";
}

function MobileBarLink({ children, className, side = "start", ...p }: MobileBarLinkPropsT) {
  return (
    <Link
      className={cn(
        "btn btn-ghost element-square-size element-rounded-full element-sm absolute",
        side === "start" ? "ltr:left-3 rtl:right-3" : "ltr:right-3 rtl:left-3",
        className
      )}
      {...p}
    >
      {children
        ? children
        : side === "start" ? (
          <>
            <ArrowLeftIcon className="element-icon-size rtl:hidden" />
            <ArrowRightIcon className="element-icon-size ltr:hidden" />
          </>
        ) : (
          <>
            <ArrowLeftIcon className="element-icon-size ltr:hidden" />
            <ArrowRightIcon className="element-icon-size rtl:hidden" />
          </>
        )}
    </Link>
  )
}

export default MobileBarLink;