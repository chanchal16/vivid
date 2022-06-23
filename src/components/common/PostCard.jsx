import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {FiTrash,FiEdit,FiMoreVertical} from 'react-icons/fi';
import {FaRegComment} from 'react-icons/fa'
import {RiThumbUpLine,RiThumbUpFill,RiBookmarkLine,RiBookmarkFill} from 'react-icons/ri'
import { addToBookmarks, deletePost, likePost, removeFromBookmarks, SHOW_MODAL, unLikePost } from 'features/posts/postSlice';
import { checkIfExists, checkLikedByUser } from 'utils/check-if-exists';
import { Link } from 'react-router-dom';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const PostCard = ({post}) => {
    const[showDropdown,setShowDropdown] = useState(false)
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

    const editClickHandler = (post)=>{
        dispatch(SHOW_MODAL(post))
        setShowDropdown(false)
    }
  return (
    <article className='bg-white rounded border-1 mx-2 md:mx-0 m-5'>
        <div className="flex items-center px-4 py-2">
            <Link to={`/profile/${post.username}`}>
                <img
                className="w-12 h-12 rounded-full"
                src={ currUserProfile?.avatarUrl || post.avatarUrl }
                alt={post.username}
                />
            </Link>
            <div className='flex flex-col'>
                <Link to={`/profile/${post.username}`} className='hover:text-primary-dark'> 
                <span className="px-4 text-lg">
                    {post?.username}
                </span></Link>
                <p className="inline-block text-xs ml-4 text-gray">
                {dayjs(post.updatedAt).fromNow()}
                </p>
            </div>
            
            {/* show more */}
            {
                post.username === user?.user?.username && (
                    <div className='ml-auto relative'>
                        <button data-tooltip="More" onClick={()=>setShowDropdown(prev=>!prev)}
                        className="tooltip mx-2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:text-primary">
                            <FiMoreVertical/> 
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mx-2 bg-[#f8fafc]  px-4 py-2 rounded min-w-max w-32">
                                <button
                                    className="w-full py-1 rounded flex items-center gap-1 text-pista-dark hover:text-[#9bc989]"
                                    onClick={() => editClickHandler(post)}>
                                   <FiEdit/> Edit
                                </button>
                                <button
                                    className="w-full py-1 rounded flex items-center gap-1 text-red hover:text-red-dark"
                                    onClick={() => dispatch(deletePost({token:user?.token,postId:post?._id}))}>
                                  <FiTrash/>  Delete
                                </button>
                            </div>
                        )}
                    </div>
                )
            }           
        </div>
        <div className="px-4 text-justify">
            <p className="py-2">{post?.content}</p>
        </div>
        {post?.postImg && <img className="w-full" src={post?.postImg.url} alt="" />}
        <section className="flex p-4 justify-between">
            <div className="flex gap-x-6">
                <button onClick={()=>likeHandler(post._id)}
                    className="flex items-center rounded-full text-2xl text-primary"
                    title="like">
                    { isLikedByUser ? <RiThumbUpFill/> :<RiThumbUpLine /> }
                    <span className="ml-1 text-lg">{ post?.likes?.likeCount > 0 && post.likes.likeCount }</span>
                </button>
                <Link to={`/posts/${post?._id}`}
                    className=" flex items-center p-2 mr-1 rounded-full text-2xl text-primary hover:text-pista"
                    title="comment">
                    <FaRegComment/>
                    <span className="ml-1 text-lg">{ post?.comments.length > 0 && post.comments.length }</span>
                </Link>
            </div>
            <div className="flex gap-x-2">
                <button onClick={bookmarkHandler}
                className="p-2 mr-1 rounded-full text-2xl text-primary"
                title="save">
                    {isBookmarked ? <RiBookmarkFill/> : <RiBookmarkLine/>}
                </button>              
            </div>           
        </section>
    </article>
  )
}
