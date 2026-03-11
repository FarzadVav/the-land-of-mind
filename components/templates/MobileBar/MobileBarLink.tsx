import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";
import { ArrowLeftIcon } from "lucide-react";

function MobileBarLink({ className, ...p }: Omit<ComponentProps<typeof Link>, "children">) {
  return (
    <Link
      className={cn("btn btn-ghost element-square-size element-rounded-full element-sm absolute left-3", className)}
      {...p}
    >
      <ArrowLeftIcon className="element-icon-size" />
    </Link>
  )
}

export default MobileBarLink;