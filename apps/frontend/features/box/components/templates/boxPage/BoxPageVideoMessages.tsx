"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../../modules/boxMessages/BoxMessages";

function BoxPageVideoMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.video} messageType="video" />
  )
}

export default BoxPageVideoMessages;