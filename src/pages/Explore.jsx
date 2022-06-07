import React,{useEffect,Suspense} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from 'features/posts/postSlice';
import { PostCard } from '../components/common/PostCard';
const SuggestedUsers = React.lazy(()=>import('features/profile/SuggestedUsers'));

export const Explore = () => {
    const postState = useSelector(state => state.post);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
  return (
    <section className='grid grid-cols-6 gap-x-4 lg:gap-x-8 w-full my-4'>
        <div className="col-span-6 md:col-span-4">
            {
                postState.allPosts?.map(post=>(
                    <PostCard post={post} key={post?._id}/>
                ))
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
