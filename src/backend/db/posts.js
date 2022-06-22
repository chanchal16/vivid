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
    postImg:{},
    comments:[],
    username: "iamjane",
    name:'Jane Harvey',
    avatarUrl:'https://i.pravatar.cc/150?img=45',
    createdAt: formatDate(),
    updatedAt: '2022-05-14T16:42:09+05:30',
  },
  {
    _id: uuid(),
    content:
      "",
    postImg:{
      original_filename:'',
      url:'https://i.picsum.photos/id/1043/5184/3456.jpg?hmac=wsz2e0aFKEI0ij7mauIr2nFz2pzC8xNlgDHWHYi9qbc'
    },
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "chanchal",
    name:'Chanchal Rajput',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
    createdAt: formatDate(),
    updatedAt: '2022-05-04T16:42:09+05:30',
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
    avatarUrl:'https://joeschmoe.io/api/v1/jon',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    content:'',
    postImg:{
      original_filename:'',
      url:'https://cdn.guff.com/site_0/media/32000/31846/items/99ed5114f66c36899fe7b0ce.jpg',
    },
    likes:{
      likeCount:3,
      likedBy:[],
      dislikedBy:[],
    },
    comments:[],
    username:'memers_world',
    name:'memers',
    avatarUrl:'https://w7.pngwing.com/pngs/434/1003/png-transparent-rage-comic-basketball-player-laughing-white-face-monochrome.png',
    createdAt: formatDate(),
    updatedAt: '2022-06-01T16:42:09+05:30'
  },
  {
    _id: uuid(),
    content:
      "Being alone is peaceful!",
    postImg:{
      original_filename:'',
      url:'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'
    },
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "chanchal",
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
    avatarUrl:'https://joeschmoe.io/api/v1/jon',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: `Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you
       are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.`,
    postImg:{},
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments:[],
    username: "iamjane",
    name:'Jane Harvey',
    avatarUrl:'https://i.pravatar.cc/150?img=45',
    createdAt: formatDate(),
    updatedAt: '2022-04-29T16:42:09+05:30',
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
    avatarUrl:'https://joeschmoe.io/api/v1/jon',
    createdAt: formatDate(),
    updatedAt: '2022-05-21T16:42:09+05:30',
  }
];
