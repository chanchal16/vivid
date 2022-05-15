import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      " When you have a dream, you’ve got to grab it and never let go. -Carol Burnett",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "",
    img:'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "chanchal",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Being alone is peaceful!",
    img:'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "chanchal",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you
       are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.`,
    img:null,
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
