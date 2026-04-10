"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../boxMessages/BoxMessages";

function BoxAudioMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.audio} messageType="audio" />
  )
}

export default BoxAudioMessages;