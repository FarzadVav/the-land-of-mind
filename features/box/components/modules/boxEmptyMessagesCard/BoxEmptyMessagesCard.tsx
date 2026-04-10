import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";

import { getMessageType } from "../../../lib/box.utils";
import { AllCombinedMessageTypeT } from "../../../lib/box.types";

type BoxEmptyMessagesCardPropsT = ComponentProps<"div"> & {
  messageType: AllCombinedMessageTypeT;
}

function BoxEmptyMessagesCard({ messageType, className }: BoxEmptyMessagesCardPropsT) {
  return (
    <div className={cn(
      "card card-x justify-center border-2 border-dashed border-background-thin",
      className
    )}>
      <h6 className="title text-center">
        {getMessageType(messageType)} Messages Is Empty
      </h6>
    </div>
  )
}

export default BoxEmptyMessagesCard;