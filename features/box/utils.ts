import { AllCombinedMessageTypeT } from "./types";

export const getMessageType = (messageType: AllCombinedMessageTypeT) => {
  switch (messageType) {
    case "all": {
      return "All"
    }

    case "text": {
      return "Text"
    }

    case "image": {
      return "Image"
    }

    case "video": {
      return "Video"
    }

    case "vioce": {
      return "Voice"
    }

    case "audio": {
      return "Audio"
    }

    default: {
      return "File";
    }
  }
}