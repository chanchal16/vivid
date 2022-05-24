# vivid
 A social media app using react

## Demo


https://user-images.githubusercontent.com/56486295/170035258-e06d7a7d-e494-440c-bd66-1f1d045af897.mp4


 
## Features
**User/Home Feed**:

- User will able to see all his posts and post of the people he/she follow.
- Feed can be sort based on `recent` and `trending` posts.
- User/Home and Explore feed has `infinite scroll`.

**Explore Feed**

- All the new users posts will be shown over here.

**Search**

- User can search other users and follow them if not followed.
- Implemented `debounce` for search.

**Post**

- User can `add`, `like/unlike` `edit`, `delete`, and `bookmark` a post.
- Each post can be viewed on single page where user can comment and can edit or delete the comment.
- Post can consist of text, image or gifs.

**Profile**

- User can view there profile or any other users profile.
- Each user can edit there profile.
- From someones profile logged in user can follow there following or follower users.

**Authentication**

- myspace has login, signup and logout feature.
- A new user can also login using test credentials.
- For Signup, form validation is done for all the fields.





## Tech Stack
- React
- Tailwind css
- React router
- Redux Toolkit

## Run the app locally

1. Clone the repo
   ```sh
   git clone https://github.com/chanchal16/vivid.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start dev server
   ```sh
   npm start
