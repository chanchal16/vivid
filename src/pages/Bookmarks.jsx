import { useEffect } from 'react';
import { PostCard } from 'components/common/PostCard';
import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { getBookmarks } from 'features/posts/postSlice';

export const Bookmarks = () => {
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const postState = useSelector(state => state.post)
    const {bookmarkList} = postState;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBookmarks({token:user?.token}))
    }, [dispatch])
    
  return (
    <div className='container mx-auto w-9/12 m-4 p-6'>
        {
            bookmarkList?.map(post=>(
                <PostCard post={post} key={post?._id}/>
            ))
        }
    </div>
  )
}