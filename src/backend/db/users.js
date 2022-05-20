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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Chanchla Rajput",
    username:'chanchal_16',
    avatarUrl:'https://res.cloudinary.com/cr07/image/upload/v1591779540/uzo2kczlerzdc8t9abin.jpg',
    email: "chanchal@gmail.com",
    password: "pass890",
    bio:'Creator of this app, frontend developer, learning @neogCamp.',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
