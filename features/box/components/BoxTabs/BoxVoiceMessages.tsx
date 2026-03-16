"use client";

import { MESSAGES_BY_TYPE } from "../../mockData";
import BoxMessages from "../BoxMessages/BoxMessages";

function BoxVoiceMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.vioce} messageType="vioce" />
  )
}

export default BoxVoiceMessages;