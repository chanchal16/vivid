import React,{useState} from 'react'
import {MdPhoto,MdClose} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL,createPost} from './postSlice';

export const PostModal = () => {
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const postState = useSelector(state => state.post);
    const{selectedPost,isModalOpen} = postState
    const dispatch = useDispatch() 
  // usestates
    const [postContent,setPostContent] = useState('');
    const [postImg,setPostImg] = useState({})

    const createNewPost =async (e)=>{
        e.preventDefault();
          let postData = {
              content:postContent,
              img:postImg,
              comments:[]
          }
          dispatch(createPost({token:user?.token,postData}))              
      setPostContent('') ;
      dispatch(CLOSE_MODAL())   
    }
    
  return (
    isModalOpen && (<div className="absolute top-0 left-0 h-screen w-full backdrop-blur-sm mt-[8vh] z-10 flex justify-center">
    <div className="addpost mb-8 max-w-full w-[32rem]">
        <div className="flex justify-between">
          <h2 className="text-xl ">Share your thoughts!</h2>
          <button className="px-3" onClick={() => dispatch(CLOSE_MODAL())}>
            <MdClose size="1.5rem" />
          </button>
        </div>
        <form onSubmit={createNewPost}>
            <textarea name="postContent" onChange={(e)=>setPostContent(e.target.value)} value={postContent || selectedPost?.content} 
            id="post_content" placeholder="What's on your mind?" rows="3" className='w-full'></textarea>

            <div className="flex justify-between items-center mt-4">
                <label className="post-btn-upload flex items-center" >
                    <MdPhoto className="text-3xl" title={"Upload Image"} />
                </label>
                <button type="submit" className="bg-primary p-1 rounded hover:bg-primary-dark">
                    {selectedPost ? 'update' : 'add'}
                </button>
            </div>
        </form>
    </div>
    </div>)
  )
}
