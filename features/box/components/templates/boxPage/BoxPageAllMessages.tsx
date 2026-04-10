"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../../modules/boxMessages/BoxMessages";
import BoxChatInput from "../../modules/boxChatInput/BoxChatInput";

function BoxPageAllMessages() {
  return (
    <>
      <BoxMessages messagesData={MESSAGES_BY_TYPE.data.all} messageType="all" />

      <BoxChatInput />
    </>
  )
}

export default BoxPageAllMessages;