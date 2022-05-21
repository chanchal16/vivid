import { getPosts, SHOW_MODAL } from 'features/posts/postSlice';
import { SuggestedUsers } from 'features/profile/SuggestedUsers';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostCard } from '../components/common/PostCard';

export const Feed = () => {
    const postState = useSelector(state => state.post);
    const dispatch = useDispatch() 
    console.log('posts',postState?.allPosts)
    // sort by recently added
    const sortedPosts = postState?.allPosts?.slice().reverse()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    
  return (
    <div className='grid grid-cols-6 gap-x-4 lg:gap-x-8 w-full my-4'>

        <div className="col-span-6 md:col-span-4">
            {/* <CreatePost/>  */}
            <div className="flex bg-white mb-2 p-4 rounded">
              <img
                className="w-12 rounded-full mr-2"
                src="http://www.gravatar.com/avatar/?d=mp"
                alt="user"
              />
              <button
                className="rounded-full w-full border-2 border-light border-solid text-left px-5 text-gray"
                onClick={() => dispatch(SHOW_MODAL())}>
                What's on your mind?
              </button>
            </div>
            {
                sortedPosts?.map(post=>(
                    <PostCard post={post} key={post?._id}/>
                ))
            }
        </div>
        <div className="col-span-6 md:col-span-2">
          <SuggestedUsers/>
        </div>
    </div>
  )
}
