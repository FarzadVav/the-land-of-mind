"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../boxMessages/BoxMessages";

function BoxVideoMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.video} messageType="video" />
  )
}

export default BoxVideoMessages;