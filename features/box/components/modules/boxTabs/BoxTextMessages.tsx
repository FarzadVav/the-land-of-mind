"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../boxMessages/BoxMessages";

function BoxTextMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.text} messageType="text" />
  )
}

export default BoxTextMessages;