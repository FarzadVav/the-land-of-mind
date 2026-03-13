"use client";

import { cn } from "@kadoui/react/utils";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { ComponentProps, MouseEventHandler } from "react";

type MobileBarLinkPropsT = Omit<ComponentProps<"button">, "children"> & {
  href?: string;
}

function MobileBarLink({ className, onClick, href, ...p }: MobileBarLinkPropsT) {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }

    onClick?.(ev);
  }

  return (
    <button
      onClick={handleClick}
      className={cn("btn btn-ghost element-square-size element-rounded-full element-sm absolute left-3", className)}
      {...p}
    >
      <ArrowLeftIcon className="element-icon-size" />
    </button>
  )
}

export default MobileBarLink;