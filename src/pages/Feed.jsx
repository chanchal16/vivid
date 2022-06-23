import {Suspense} from 'react'
import { getPosts,SHOW_MODAL, SORT_POST_TYPE } from 'features/posts/postSlice';
import React,{useEffect,useCallback,useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserFeed,sortPosts } from 'utils';
import { PostCard } from '../components/common/PostCard';
import {ImSpinner8} from 'react-icons/im';
const SuggestedUsers = React.lazy(()=>import('features/profile/SuggestedUsers'));

export const Feed = ({setShowEmojiContainer}) => {
  const {user} = useSelector(state=>state.auth);
  const {sortPostType,allPosts,feedStatus,userFollowing} = useSelector(state => state.post);
  const dispatch = useDispatch() 
  const userFeed = getUserFeed(allPosts,userFollowing?.following,user?.user?.username).slice().reverse()
  const sortedPosts = sortPosts(userFeed,sortPostType)
  const mountedRef = useRef(true)

  const getAllPosts= useCallback(
    () => {
      if(!mountedRef.current) return null
      dispatch(getPosts())
    },
    [mountedRef],
  )
    
  useEffect(() => {
      getAllPosts()
      return(()=>{
        mountedRef.current = false
        // setShowEmojiContainer(false)
      })
  }, [])

  const sortClickHandler = (type)=>{
    dispatch(SORT_POST_TYPE(type))
  }
    
  return (
    <div className='grid grid-cols-6 gap-x-4 lg:gap-x-8 w-full my-4'>
        <div className="col-span-6 md:col-span-4">           
            <div className="flex bg-white mb-2 p-4 rounded">
              <img
                className="w-12 rounded-full mr-2"
                src="http://www.gravatar.com/avatar/?d=mp"
                alt="user"
              />
              <button
                className="rounded-full w-full border-2 border-light border-solid text-left px-5 text-gray cursor-text"
                onClick={() => dispatch(SHOW_MODAL())}>
                What's on your mind?
              </button>
            </div>
            <div className='m-4 grid grid-cols-6'>
              <button className={`outline-none col-span-2 border-b-4 p-2 ${sortPostType === 'SORT_BY_RECENT'?' border-primary':'default'}`} 
                onClick={()=>sortClickHandler('SORT_BY_RECENT')}>
                recent
              </button>
              <button className={`outline-none col-span-2 border-b-4 p-2 ${sortPostType === 'SORT_BY_OLDER'?' border-primary':'default'}`} 
                onClick={()=>sortClickHandler('SORT_BY_OLDER')}>
                older
              </button>
              <button className={`outline-none col-span-2 border-b-4 p-2 ${sortPostType === 'TRENDING'?' border-primary':'default'}`} 
                onClick={()=>sortClickHandler('TRENDING')}>
                trending
              </button>              
            </div>
            {
              feedStatus == 'Loading' ?
              <div className="flex items-end justify-center h-24">
                <ImSpinner8 className="loading-icon text-primary-dark text-3xl" />
              </div>
              :
              <div className=''>
                {
                  sortedPosts.length > 0 ?
                    sortedPosts?.map(post=>(
                        <PostCard post={post} key={post?._id}/>
                    ))
                  :
                  <div className='p-8'>
                  <p className="rounded py-4 px-2 mb-6 text-center text-sm text-gray border border-gray">
                    Your posts and the posts of people you follow will appear here.
                  </p></div>
                }
              </div>
            }           
        </div>
        <div className="col-span-6 md:col-span-2">
          <Suspense fallback={<div></div>}>
            <SuggestedUsers/>
          </Suspense>
        </div>
    </div>
  )
}
