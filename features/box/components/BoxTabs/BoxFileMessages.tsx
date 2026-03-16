"use client";

import { MESSAGES_BY_TYPE } from "../../mockData";
import BoxMessages from "../BoxMessages/BoxMessages";

function BoxFileMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.file} messageType="file" />
  )
}

export default BoxFileMessages;