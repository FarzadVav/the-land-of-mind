"use client";

import { MESSAGES_BY_TYPE } from "../../mockData";
import BoxMessages from "../BoxMessages/BoxMessages";

function BoxVideoMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.video} messageType="video" />
  )
}

export default BoxVideoMessages;