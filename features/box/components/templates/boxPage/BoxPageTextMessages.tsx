"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../../modules/boxMessages/BoxMessages";

function BoxPageTextMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.text} messageType="text" />
  )
}

export default BoxPageTextMessages;