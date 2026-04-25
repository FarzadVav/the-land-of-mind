"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../../modules/boxMessages/BoxMessages";

function BoxPageVoiceMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.vioce} messageType="vioce" />
  )
}

export default BoxPageVoiceMessages;