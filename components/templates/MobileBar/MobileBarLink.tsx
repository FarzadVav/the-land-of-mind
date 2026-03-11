import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { ArrowLeftIcon } from "lucide-react";

function MobileBarLink({ children, className, ...p }: ComponentProps<typeof Link>) {
  return (
    <Link className={cn("btn btn-ghost element-square-size element-rounded-full element-sm", className)} {...p}>
      {children || <ArrowLeftIcon className="element-icon-size" />}
    </Link>
  )
}

export default MobileBarLink;