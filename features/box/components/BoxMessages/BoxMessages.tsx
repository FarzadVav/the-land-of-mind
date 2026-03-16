"use client";

import { ComponentProps } from "react";
import { cn } from "@kadoui/react/utils";

import BoxMessageCard from "../BoxMessageCard/BoxMessageCard";
import { AllCombinedMessageTypeT, MessageT } from "../../types";
import BoxEmptyMessagesCard from "../BoxEmptyMessagesCard/BoxEmptyMessagesCard";

type BoxMessagesPropsT = ComponentProps<"div"> & {
  messagesData: MessageT[];
  messageType: AllCombinedMessageTypeT;
}

function BoxMessages({ className, messagesData, messageType }: BoxMessagesPropsT) {
  return (
    <div className={cn(
      "space-y-3",
      className
    )}>
      {messagesData.length ?
        messagesData.map(item => (
          <BoxMessageCard key={item.id} messageData={item} />
        )) : (
          <BoxEmptyMessagesCard messageType={messageType} />
        )}
    </div>
  )
}

export default BoxMessages;