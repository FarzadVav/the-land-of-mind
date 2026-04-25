"use client";

import { MESSAGES_BY_TYPE } from "../../../lib/box.constants";
import BoxMessages from "../../modules/boxMessages/BoxMessages";

function BoxPageImageMessages() {
  return (
    <BoxMessages messagesData={MESSAGES_BY_TYPE.data.image} messageType="image" />
  )
}

export default BoxPageImageMessages;