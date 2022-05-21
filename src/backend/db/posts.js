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
    img:{},
    comments:[],
    username: "adarshbalika",
    name:'Adarsh Balika',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170324/samples/people/bicycle.jpg',
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
    comments:[],
    username: "chanchal_16",
    name:'Chanchal Rajput',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      " It always seems impossible until it's done. - Nelson Mandela",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    name: "Tester",
    username:'tester',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
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
    comments:[],
    username: "chanchal_16",
    name:'Chanchal Rajput',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      " Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    name: "Tester",
    username:'tester',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you
       are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.`,
    img:{},
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "adarshbalika",
    name:'Adarsh Balika',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170324/samples/people/bicycle.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      " Manifesting a good day, week and life!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    name: "Tester",
    username:'tester',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
