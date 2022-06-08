import React,{useEffect,Suspense} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'features/posts/postSlice';
import { PostCard } from '../components/common/PostCard';
import {ImSpinner8} from 'react-icons/im';
const SuggestedUsers = React.lazy(()=>import('features/profile/SuggestedUsers'));

export const Explore = () => {
    const {feedStatus,allPosts} = useSelector(state => state.post);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
  return (
    <section className='grid grid-cols-6 gap-x-4 lg:gap-x-8 w-full my-4'>
        <div className="col-span-6 md:col-span-4">
        {
            feedStatus == 'Loading' ?
            <div className="flex items-end justify-center h-24">
            <ImSpinner8 className="loading-icon text-primary-dark text-2xl" />
            </div>
            :
            <div>
            {
                allPosts.length > 0 ?
                allPosts?.map(post=>(
                    <PostCard post={post} key={post?._id}/>
                ))
                :
                <p className="rounded py-4 px-2 mb-6 text-center text-xs text-gray-400 border border-gray-300">
                Your posts and the posts of people you follow will appear here.
                    <br /> You can check out posts from our community below.
                </p>
            }
            </div>
        }            
        </div>
        <div className="col-span-6 md:col-span-2">
            <Suspense fallback={<div></div>}>
                <SuggestedUsers/>
            </Suspense>
        </div>
    </section>
  )
}
