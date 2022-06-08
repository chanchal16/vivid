import React,{useEffect,useState,Suspense} from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import {MdKeyboardArrowLeft} from 'react-icons/md';
import {ImSpinner8} from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import {PostCard} from '../components/common/PostCard'
import { PostComments } from 'features/posts/PostComments';
import { addComment } from 'features/posts/postSlice';
const SuggestedUsers = React.lazy(()=>import('features/profile/SuggestedUsers'));

export const PostPage = () => {
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    let{token} = user
    let {allPosts,status} = useSelector(state => state.post)
    const {postId} = useParams();
    const navigate = useNavigate();
    const [comment,setComment] = useState('')
    const dispatch = useDispatch()
    let {allUsers} = useSelector((state) => state.users);

    // set curr post
    const currPost = allPosts?.find(post=>post._id === postId);

    // check currUser
    const currUserProfile = allUsers?.find((user) => user.username === user.username)

    const addCommentHandler = (e)=>{
        e.preventDefault()
        dispatch(addComment({token,postId,commentData:{comment}}))
        setComment('')
    }

  return (
    <section className='w-full'>
        <div className="grid grid-cols-5 gap-x-4 lg:gap-x-8 w-full mb-4">
            <div className="col-span-5 md:col-span-3">
                <button className="text-primary-dark p-1 rounded hover:text-pista-dark flex items-center" onClick={()=> navigate(-1)}>
                    <MdKeyboardArrowLeft /> Back
                </button>
            </div>
            
            <div className="col-span-5 md:col-span-3 mt-4 mb-8">
                {
                    status == "Loading" ?
                    <div className="flex items-center justify-center h-24">
                        <ImSpinner8 className="loading-icon text-2xl text-primary-dark" />
                    </div>
                    :
                    status == "Rejected" ?
                    <p>something went wrong</p>
                    :
                    status == "Not found" ?
                    <div className="text-gray-500 text-md flex flex-col items-center justify-center py-12 border border-gray-200 rounded">
                        The post you are looking for cannot be found.
                        <small className="text-gray-400 py-2">It's probably been deleted.</small>
                    </div>
                    :
                    <div className="post-container relative">
                        {
                            currPost &&
                            <PostCard post={currPost}/>
                        }
                        {
                            currPost?.comments?.length > 0 ?
                            <PostComments allComments = {currPost?.comments}/>
                            :
                            null
                        }

                        <div className="add-comment z-10 px-0.5 border border-solid border-light relative flex items-center">
                            <img loading='lazy' className='h-8 w-8 rounded-full flex-shrink-0 mr-2 object-cover' src={currUserProfile?.avatarUrl || currPost?.avatarUrl} /> 
                            <form onSubmit={addCommentHandler}  className="flex flex-grow bg-white">
                                <input type="text"  onChange={(e)=>setComment(()=>e.target.value)} value={comment}
                                        name="commentText" id="commentText" placeholder={"Comment as "} 
                                        className="comment-input rounded border-light text-xs flex-grow" required/>
                                <button className="text-xs ml-1 bg-light p-1 rounded hover:bg-primary" >
                                Send
                                </button>
                            </form>
                        </div>
                    </div>
                    
                }                
            </div>

            <div className="col-span-5 md:col-span-2 mt-4">
                <Suspense fallback={<div></div>}>
                    <SuggestedUsers/>
                </Suspense>               
            </div>
        </div>
    </section>
  )
}
