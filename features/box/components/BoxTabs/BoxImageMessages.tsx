"use client";

import { MESSAGES_BY_TYPE } from "../../mockData";
import BoxMessages from "../BoxMessages/BoxMessages";

function BoxImageMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.image} messageType="image" />
  )
}

export default BoxImageMessages;