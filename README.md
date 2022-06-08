<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/chanchal16/vivid/">
    <img src="public/staryu.svg" alt="Logo" width="90" height="90">
  </a>
  <h3 align="center">Vivid</h3>

  <p align="center">
    A social media app with all basic features implemented. 
    <br />
    <a href="https://vividd.netlify.app/" target="_blank">View Demo</a>
  </p>
</p>


## About the Project
A social media app where a user can create/edit/delete posts, follow other users, like and comment on posts, check profile of other users, update own profile, and save posts. This app uses Redux Toolkit for state management.

## Demo

https://user-images.githubusercontent.com/56486295/170035258-e06d7a7d-e494-440c-bd66-1f1d045af897.mp4


 
## Features
**User/Home Feed**:

- User will able to see all his posts and post of the people he/she follow.
- Feed can be sort based on `recent`,`older` and `trending` posts.

**Explore Feed**

- All the users posts will be shown over here.

**Post**

- User can `add`, `like/unlike` `edit`, `delete`, and `bookmark` a post.
- Each post can be viewed on single page where user can comment and delete the comment.
- Post can consist of text and image.

**Profile**

- User can view their profile or any other user's profile.
- Each user can edit their profile.
- Logged In user can follow/unfollow a user by visiting on their profile.

**Authentication**

- Login, signup and logout feature.
- A new user can also login using test credentials.


## Tech Stack
- React
- Tailwind css
- React router
- Redux Toolkit
- [Mockbee](https://mockbee.netlify.app/) (mock backend)

## Run the app locally

1. Clone the repo
   ```sh
   git clone https://github.com/chanchal16/vivid.git
   
   cd vivid
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory (at the level of `package.json`) and create a environment variables.

   ```
   REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
   REACT_APP_CLOUD_NAME = <YOUR_CLOUD_NAME_FROM_CLOUDINARY>
   REACT_APP_UPLOAD_PRESET = <YOUR_UPLOAD_PRESET>
   ```
4. Start dev server
   ```sh
   npm start
