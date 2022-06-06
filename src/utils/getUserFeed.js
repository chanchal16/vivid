import {checkCurrentUser} from './check-if-exists'

export const getUserFeed = (posts,following,username)=>{
	return posts.filter(
		(post) =>
			checkCurrentUser(following,post?.username) ||
			post?.username === username
	);
}