import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {FiTrash} from 'react-icons/fi';
import {FaRegComment} from 'react-icons/fa'
import {RiThumbUpLine,RiThumbUpFill,RiBookmarkLine,RiBookmarkFill} from 'react-icons/ri'
import { addToBookmarks, deletePost, likePost, removeFromBookmarks, unLikePost } from 'features/posts/postSlice';
import { checkIfExists, checkLikedByUser } from 'utils/check-if-exists';

export const PostCard = ({post,avatar}) => {
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const postState = useSelector(state => state.post)
    const {bookmarkList} = postState
    let {allUsers} = useSelector((state) => state.users);
    const dispatch = useDispatch() 
    // check if post is liked by user
    const isLikedByUser = checkLikedByUser(user?.user,post?.likes)
    // check if post is bookmarked by user
    const isBookmarked = checkIfExists(bookmarkList,post._id)

    // check currUser
    const currUserProfile = allUsers?.find((user) => user.username === post.username)

    // post like handler
    const likeHandler = (postId)=>{
        if(!isLikedByUser){
            dispatch(likePost({token:user?.token,postId}))
        }else{
            dispatch(unLikePost({token:user?.token,postId}))
        }       
    }

    // bookmarks handler
    const bookmarkHandler = ()=>{
        if(!isBookmarked){
            dispatch(addToBookmarks({token:user?.token, postId:post._id}))
        }else{
            dispatch(removeFromBookmarks({token:user?.token, postId:post._id}))
        }
    }
  return (
    <article className='bg-white dark:bg-gray-800 rounded border-1 mx-2 md:mx-0 m-5'>
        <div className="flex items-center px-4 py-2">
            <img
            className="w-12 h-12 rounded-full"
            src={ currUserProfile?.avatarUrl || post.avatarUrl }
            alt={post.username}
            />
            <div>
                <span className="px-4 text-lg">
                    {post.username}
                </span>
            </div>
        </div>
        <div className="px-4 text-justify">
            <p className="py-2">{post.content}</p>
        </div>
        {post?.img && <img className="w-full" src={post.img} alt="" />}
        <section className="flex p-4 justify-between">
            <div className="flex gap-x-6">
                <button onClick={()=>likeHandler(post._id)}
                    className="flex items-center rounded-full text-2xl text-primary"
                    title="like">
                    { isLikedByUser ? <RiThumbUpFill/> :<RiThumbUpLine /> }
                    <span className="ml-1 text-lg">{ post?.likes?.likeCount > 0 && post.likes.likeCount }</span>
                </button>
                <button
                    className="p-2 mr-1 rounded-full text-2xl hover:text-primary"
                    title="comment">
                    <FaRegComment/>
                </button>
            </div>
            <div className="flex gap-x-2">
                <button onClick={bookmarkHandler}
                className="p-2 mr-1 rounded-full text-2xl text-primary"
                title="save">
                    {isBookmarked ? <RiBookmarkFill/> : <RiBookmarkLine/>}
                </button>
                <button className="p-2 mr-1 rounded-full text-2xl hover:text-primary"
                title="delete" onClick={()=>dispatch(deletePost(post._id))}>
                    <FiTrash/>
                </button>
            </div>           
        </section>
    </article>
  )
}
