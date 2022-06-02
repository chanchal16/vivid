import React from 'react';
import { useParams,Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeComment } from './postSlice';
import {FaRegTrashAlt} from "react-icons/fa";

export const PostComments = ({allComments}) => {
  const {postId} = useParams();
  const authState = useSelector(state => state.auth);
  let{user} = authState;
  let{token} = user
  const dispatch = useDispatch()

  const deleteComment = (comment) =>{
    dispatch(removeComment({token,postId,commentId:comment._id}))
  }

  return (
    <section className="max-h-44 rounded p-2 bg-white overflow-auto">
      <h3 className=" text-gray pb-2">Comments <span className="text-sm">({allComments.length})</span></h3>
      {
        allComments.map(comment => {
            return (
                <div key={comment._id} className="border-b-2 border-solid border-light py-2 mb-2
                text-xs flex gap-x-1 rounded">
                    <div className="flex-shrink-0">
                        <img loading='lazy' className='h-8 w-8 rounded-full flex-shrink-0 mr-2 object-cover' src={comment?.avatarUrl} />
                    </div>
                    <div className="flex-grow">
                        <Link to=''>{comment.name}</Link>
                        <div className="pt-1">
                            {comment.comment}
                        </div>
                    </div>                  
                    {
                        user?.user?.name === comment?.name
                        ?                   
                        <div className="delete-button-wrapper">
                            <button onClick={() => deleteComment(comment)} className="mt-1 mr-1" aria-label="delete comment" title="delete comment">
                                <FaRegTrashAlt className="text-red hover:text-red-dark"  />
                            </button>
                        </div>
                         : null
                    }                   
                </div>
            )
        })
      }
    </section>
  )
}
