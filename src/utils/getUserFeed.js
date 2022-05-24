import {checkCurrentUser} from './check-if-exists'

export const getUserFeed = (posts,followers,username)=>{
    if (followers?.length === 0) return posts;
	return posts.filter(
		(post) =>
			checkCurrentUser(followers,post?.username) ||
			post?.username === username
	);
}