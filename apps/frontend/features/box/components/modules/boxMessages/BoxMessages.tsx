"use client";

import BoxMessageCard from "../boxMessageCard/BoxMessageCard";
import { AllCombinedMessageTypeT, MessageT } from "../../../lib/box.types";
import BoxEmptyMessagesCard from "../boxEmptyMessagesCard/BoxEmptyMessagesCard";

type BoxMessagesPropsT = {
  messagesData: MessageT[];
  messageType: AllCombinedMessageTypeT;
}

function BoxMessages({ messagesData, messageType }: BoxMessagesPropsT) {
  return (
    messagesData.length ?
      messagesData.map(item => (
        <BoxMessageCard className="not-first:mt-3" key={item.id} messageData={item} />
      )) : (
        <BoxEmptyMessagesCard messageType={messageType} />
      )
  )
}

export default BoxMessages;