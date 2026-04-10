import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";

function MobileBarTitle({ className, ...p }: ComponentProps<"h1">) {
  return (
    <h1 className={cn("title absolute inset-center", className)} {...p} />
  )
}

export default MobileBarTitle;