import { ApiResponseT } from "@/types/app.types";
import { MessagesByTypeT, MessageT } from "./types";

export const MESSAGES: ApiResponseT<MessageT[]> = {
  data: [
    {
      id: 1,
      text: "The best materail for Lion & Son flag is iron",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      type: "text",
      files: null,
      replyTo: null
    },
    {
      id: 2,
      text: "Maybe not!",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      type: "file",
      files: [
        {
          id: "hdsfys9df7d-sjnfkh7y-sdf987sdf",
          name: "Dark shirts",
          format: "jfif",
          size: 38,
          type: "image",
          link: "/images/Dark shirts.jfif"
        },
        {
          id: "khdhf987sfh-98sf9dfhsdf-89s87f9",
          name: "Advanced shirt",
          format: "jfif",
          size: 50,
          type: "image",
          link: "/images/Advanced shirt.jfif"
        },
      ],
      replyTo: {
        id: 1,
        text: "The best materail for Lion & Son flag is iron",
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        type: "text",
        files: null,
        replyTo: null
      }
    },
    {
      id: 3,
      text: "The best way for increase your chest",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      type: "file",
      files: [
        {
          id: "23043k4k42k3h4-2kj349v9v",
          name: "Chest workout",
          format: "mp4",
          size: 19254,
          type: "video",
          link: "/videos/Chest workout.mp4"
        }
      ],
      replyTo: null
    },
    {
      id: 4,
      text: null,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      type: "file",
      files: [
        {
          id: "lkjw4jk98v-lkj4ou=3409-lkj34",
          name: null,
          format: "opus",
          size: 39,
          type: "vioce",
          link: "/videos/Chest workout.opus"
        }
      ],
      replyTo: null
    },
    {
      id: 5,
      text: null,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      type: "file",
      files: [
        {
          id: "sfh8s6f-sk3jn98-s97jh-fsd",
          name: "Bi Vojdan",
          format: "mp3",
          size: 8430,
          type: "audio",
          link: "/audios/Bi Vojdan.mp3"
        }
      ],
      replyTo: null
    },
    {
      id: 6,
      text: "Some important Typescript type files",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      type: "file",
      files: [
        {
          id: "sdf97fs9d7-234hj0=sf-sdf97#g",
          name: "appTypes",
          format: "ts",
          size: 1,
          type: "file",
          link: "/files/appTypes.ts"
        },
        {
          id: "sdf9823-2348%f-34=3",
          name: "experiencesTypes",
          format: "ts",
          size: 1,
          type: "file",
          link: "/files/experiencesTypes.ts"
        },
        {
          id: "sf97sdf-sf987sf-fh329g8ig-2=2g=5g",
          name: "todosTypes",
          format: "ts",
          size: 1,
          type: "file",
          link: "/files/todosTypes.ts"
        },
      ],
      replyTo: null
    },
    {
      id: 1,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores numquam eaque illum animi iusto aspernatur! Accusamus unde velit commodi voluptas, laudantium architecto esse facere rerum fuga cupiditate, ad quaerat tempore!",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      type: "text",
      files: null,
      replyTo: {
        id: 1,
        text: "The best materail for Lion & Son flag is iron",
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
        type: "text",
        files: null,
        replyTo: null
      }
    }
  ],
  errors: null
}

export const MESSAGES_BY_TYPE: ApiResponseT<MessagesByTypeT> = {
  data: {
    all: MESSAGES.data,
    text: [
      MESSAGES.data[0],
      MESSAGES.data[6],
    ],
    image: [
      MESSAGES.data[1]
    ],
    video: [
      MESSAGES.data[2]
    ],
    vioce: [
      MESSAGES.data[3]
    ],
    audio: [
      MESSAGES.data[4]
    ],
    file: [
      MESSAGES.data[5]
    ]
  },
  errors: null
}