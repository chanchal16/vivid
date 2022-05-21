import { useEffect } from 'react';
import { PostCard } from 'components/common/PostCard';
import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { getBookmarks } from 'features/posts/postSlice';

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
        {
            BookmarkedPosts?.map(post=>(
                <PostCard post={post} key={post?._id}/>
            ))
        }
    </div>
  )
}
