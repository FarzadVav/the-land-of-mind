"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxChatInput from "../boxChatInput/BoxChatInput";
import BoxMessages from "../boxMessages/BoxMessages";

function BoxAllMessages() {
  return (
    <>
      <BoxMessages messagesData={MESSAGES_BY_TYPE.data.all} messageType="all" />

      <BoxChatInput />
    </>
  )
}

export default BoxAllMessages;