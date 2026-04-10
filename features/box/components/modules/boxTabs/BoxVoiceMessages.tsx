"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../boxMessages/BoxMessages";

function BoxVoiceMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.vioce} messageType="vioce" />
  )
}

export default BoxVoiceMessages;