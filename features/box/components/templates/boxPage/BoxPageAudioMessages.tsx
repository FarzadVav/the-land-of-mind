"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../../modules/boxMessages/BoxMessages";

function BoxPageAudioMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.audio} messageType="audio" />
  )
}

export default BoxPageAudioMessages;