import Link from "next/link";
import { BotIcon } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";

function FloatingAIButton({ className }: Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={"/land/ai"}
      className={cn(
        "btn btn-fill palette-primary element-square-size element-rounded-full absolute right-6 bottom-full -translate-y-6",
        className
      )}
    >
      <BotIcon className="element-icon-size" />
    </Link>
  )
}

export default FloatingAIButton;