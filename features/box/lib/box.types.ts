export type MessageFileTypeT = "image" | "video" | "vioce" | "audio" | "file";

export type MessageFileT = {
  id: string;
  size: number;
  link: string;
  format: string;
  name: string | null;

  type: MessageFileTypeT;
}

export type MessageTypeT = "text" | "file";

type TextMessageT = {
  files: null;
  type: "text";
  text: string;
}
type FilesMessageT = {
  type: "file";
  text: string | null;
  files: MessageFileT[];
}
type MergedMessageT = TextMessageT | FilesMessageT;

export type MessageT = MergedMessageT & {
  id: number;
  createdAt: string;
  updatedAt: string;

  replyTo: MessageT | null;
}

export type AllCombinedMessageTypeT = "all" | "text" | MessageFileTypeT;

export type MessagesByTypeT = Record<AllCombinedMessageTypeT, MessageT[]>;