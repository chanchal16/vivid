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
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
    email: "testing@test.com",
    password: "test123",
    bio:'This is a guest account, anyone can use it.',
    bookmarks:[],
    followers:[
      {
        name: "Chanchal Rajput",
        username:'chanchal_16',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
      },
      {
        _id:uuid(),
        name:'Akash Gupta',
        username:'itsakash',
        avatarUrl:'https://i.pravatar.cc/150?img=60'
      },
      {
        _id:uuid(),
        name:'memers',
        username:'memers_world',
        avatarUrl:'https://w7.pngwing.com/pngs/434/1003/png-transparent-rage-comic-basketball-player-laughing-white-face-monochrome.png'
      }

    ],
    following:[
      {
        name: "Chanchal Rajput",
        username:'chanchal_16',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
      },
      {
        name: "Baburao",
        username:'babubhaiya',
        avatarUrl:'https://pbs.twimg.com/profile_images/1251244594966040576/v-b1F6AM_400x400.jpg',
      },
      {
        _id:uuid(),
        name:'Raju',
        username:'rajuu',
        avatarUrl:'https://pbs.twimg.com/media/Erbs_ZOXAAAXSFK?format=jpg&name=900x900'
      },
      {
        name: "Jane Harvey",
        username:'iamjane',
        avatarUrl:'https://i.pravatar.cc/150?img=45',
      }
    ],
    createdAt: '2022-05-16T16:42:09+05:30',
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Chanchal Rajput",
    username:'chanchal_16',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
    email: "chanchal@gmail.com",
    password: "pass890",
    bio:'Creator of this app, frontend developer, learning @neogCamp.',
    bookmarks:[],
    followers:[
      {
        name: "Tester",
        username:'tester',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
      },
      {
        name: "Sonam Gupta",
        username:'sonam_here',
        avatarUrl:'https://i.pravatar.cc/150?img=36',
      },
      {
        name: "Baburao",
        username:'babubhaiya',
        avatarUrl:'https://pbs.twimg.com/profile_images/1251244594966040576/v-b1F6AM_400x400.jpg',
      },
      {
        _id:uuid(),
        name:'Peter Parker',
        username:'thepeterparker',
        avatarUrl:''
      }
    ],
    following:[
      {
        name: "Baburao",
        username:'babubhaiya',
        avatarUrl:'https://pbs.twimg.com/profile_images/1251244594966040576/v-b1F6AM_400x400.jpg',
      },
      {
        name: "Tester",
        username:'tester',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
      },
      {
        name: "John Smith",
        username:'jonny',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
      },
      {
        _id:uuid(),
        name:'Raju',
        username:'rajuu',
        avatarUrl:'https://pbs.twimg.com/media/Erbs_ZOXAAAXSFK?format=jpg&name=900x900'
      },
    ],
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
    following:[
      {
        name: "Tester",
        username:'tester',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
      },
    ],
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
    followers:[
      {
        name: "Chanchal Rajput",
        username:'chanchal_16',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
      },
    ],
    following:[
      {
        name: "Chanchal Rajput",
        username:'chanchal_16',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
      },
      {
        name: "Tester",
        username:'tester',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591170323/samples/people/boy-snow-hoodie.jpg',
      },
    ],
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
    followers:[
      {
        name: "Chanchal Rajput",
        username:'chanchal_16',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
      },
    ],
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
    following:[
      {
        name: "Chanchal Rajput",
        username:'chanchal_16',
        avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
