"use client";

import { MESSAGES_BY_TYPE } from "../../mockData";
import BoxMessages from "../BoxMessages/BoxMessages";

function BoxTextMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.text} messageType="text" />
  )
}

export default BoxTextMessages;