"use client";

import { MESSAGES_BY_TYPE } from "../../mockData";
import BoxChatInput from "../BoxChatInput/BoxChatInput";
import BoxMessages from "../BoxMessages/BoxMessages";

function BoxAllMessages() {
  return (
    <>
      <BoxMessages messagesData={MESSAGES_BY_TYPE.data.all} messageType="all" />

      <BoxChatInput />
    </>
  )
}

export default BoxAllMessages;