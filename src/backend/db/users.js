import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    name: "Tester",
    username:'tester',
    avatarUrl:'https://img.freepik.com/free-vector/3d-cartoon-young-woman-smiling-circle-frame-character-illustration-vector-design_40876-3100.jpg?w=740&t=st=1673943325~exp=1673943925~hmac=e5444c0fda83c83dad7d12124b719793be9d58562cfa40ca3347667f70900682',
    email: "testing@test.com",
    password: "test123",
    bio:'This is a guest account, anyone can use it.',
    bookmarks:[],
    followers:[
      {
        name:'Akash Gupta',
        username:'itsakash',
        avatarUrl:'https://i.pravatar.cc/150?img=60'
      },
      {
        _id:uuid(),
        name:'memers',
        username:'memers_world',
        avatarUrl:'https://w7.pngwing.com/pngs/434/1003/png-transparent-rage-comic-basketball-player-laughing-white-face-monochrome.png'
      },
    ],
    following:[],
    createdAt: '2022-05-16T16:42:09+05:30',
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:'Chanchal Rajput',
    username:'chanchal',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
    email:'chanchal@gmail.com',
    password:'pass@890',
    bio:'Creator of this app, frontend developer, learning @neogCamp.',
    bookmarks:[],
    followers:[],
    following:[],
    createdAt:'2022-05-01T16:42:09+05:30' ,
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Jane Harvey",
    username:'iamjane',
    avatarUrl:'https://i.pravatar.cc/150?img=45',
    email: "jane@yahoo.com",
    password: "jane@12",
    bio:'I am the second user',
    bookmarks:[],
    followers:[],
    following:[],
    createdAt: '2022-04-29T16:42:09+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Baburao",
    username:'babubhaiya',
    avatarUrl:'https://pbs.twimg.com/profile_images/1251244594966040576/v-b1F6AM_400x400.jpg',
    email: "babu@gmail.com",
    password: "babu000",
    bio:'Main baburao ganpatrao aapte!',
    bookmarks:[],
    followers:[],
    following:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "John Smith",
    username:'jonny',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
    email: "john@yahoo.com",
    password: "john#9090",
    bio:'I am the fourth user',
    bookmarks:[],
    followers:[],
    following:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Sonam Gupta",
    username:'sonam_here',
    avatarUrl:'https://i.pravatar.cc/150?img=36',
    email: "sonam@yahoo.com",
    password: "son@am##",
    bio:'I am the third user',
    bookmarks:[],
    followers:[],
    following:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:'Akash Gupta',
    username:'itsakash',
    avatarUrl:'https://i.pravatar.cc/150?img=60',
    email:'akash@yahoo.com',
    password:'@kash00',
    bio:'I am student learning web development @neogcamp!',
    bookmarks:[],
    followers:[],
    following:[
      {
        name: "Tester",
        username:'tester',
        avatarUrl:'https://joeschmoe.io/api/v1/jon',
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:'Raju',
    username:'rajuu',
    avatarUrl:'https://pbs.twimg.com/media/Erbs_ZOXAAAXSFK?format=jpg&name=900x900',
    email:'raju@topi.com',
    password:'raju@420',
    bio:'Mein Raju, mere paas ek scheme hai,25din me paisa double',
    bookmarks:[],
    followers:[],
    following:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id:uuid(),
    name:'memers',
    username:'memers_world',
    avatarUrl:'https://w7.pngwing.com/pngs/434/1003/png-transparent-rage-comic-basketball-player-laughing-white-face-monochrome.png',
    email:'memer@meme.com',
    password:'meme007',
    bio:'Memes page',
    bookmarks:[],
    followers:[],
    following:[
      {
        name: "Tester",
        username:'tester',
        avatarUrl:'https://joeschmoe.io/api/v1/jon',
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
