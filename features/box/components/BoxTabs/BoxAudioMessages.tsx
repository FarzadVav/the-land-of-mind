"use client";

import { MESSAGES_BY_TYPE } from "../../mockData";
import BoxMessages from "../BoxMessages/BoxMessages";

function BoxAudioMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.audio} messageType="audio" />
  )
}

export default BoxAudioMessages;