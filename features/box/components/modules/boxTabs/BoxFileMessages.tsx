"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../boxMessages/BoxMessages";

function BoxFileMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.file} messageType="file" />
  )
}

export default BoxFileMessages;