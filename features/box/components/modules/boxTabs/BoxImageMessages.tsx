"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../boxMessages/BoxMessages";

function BoxImageMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.image} messageType="image" />
  )
}

export default BoxImageMessages;