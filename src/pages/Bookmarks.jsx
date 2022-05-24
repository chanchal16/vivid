import React, { useEffect } from 'react';
import { PostCard } from 'components/common/PostCard';
import {useDispatch, useSelector } from 'react-redux';
import { getBookmarks } from 'features/posts/postSlice';
import nodata from 'assets/nodata.svg'
import { Link } from 'react-router-dom';

export const Bookmarks = () => {
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const postState = useSelector(state => state.post)
    const {bookmarkList,allPosts} = postState;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBookmarks({token:user?.token}))
    }, [dispatch])

    const BookmarkedPosts = allPosts.filter((post) =>
		bookmarkList.find((id) => post._id === id)
	);
    
  return (
    <div className='container mx-auto w-9/12 m-4 p-6'>
      {BookmarkedPosts.length > 0 ? (
        <>
        {
          BookmarkedPosts?.map(post=>(
              <PostCard post={post} key={post?._id}/>
          ))
        }</>
      ):(
        <div className='flex flex-col justify-center items-center'>
        <img src={nodata} alt='liked' className='w-72' />
        <p className='text-sm text-gray text-center p-4'>You have not saved any posts yet.</p>
        <Link to='/'>
            <button className="m-auto bg-primary p-1 rounded hover:bg-primary-dark">explore</button>
        </Link>
      </div>
      )
    }
        
    </div>
  )
}
