import React from 'react'
import { useDispatch } from 'react-redux';
import {FiThumbsUp,FiTrash} from 'react-icons/fi';
import {FaRegComment} from 'react-icons/fa'
import { BiBookmark } from "react-icons/bi";
import { deletePost } from 'features/posts/postSlice';

export const PostCard = ({post}) => {
    const dispatch = useDispatch() 

  return (
    <article className='bg-white dark:bg-gray-800 rounded border-1 mx-2 md:mx-0 m-5'>
        <div className="flex items-center px-4 py-2">
            <img
            className="w-12 rounded-full"
            src={post?.avatar || "https://i.pravatar.cc/300"}
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
                <button
                    className="flex items-center rounded-full text-2xl hover:text-primary"
                    title="like">
                    <FiThumbsUp /> 
                    <span className="ml-1 text-lg">{ post.likes.likeCount}</span>
                </button>
                <button
                    className="p-2 mr-1 rounded-full text-2xl hover:text-primary"
                    title="comment">
                    <FaRegComment/>
                </button>
            </div>
            <div className="flex gap-x-2">
                <button
                className="p-2 mr-1 rounded-full text-2xl hover:text-primary"
                title="save">
                    <BiBookmark />
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
