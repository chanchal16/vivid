import React,{useState} from 'react'
import {MdPhoto,MdClose,MdOutlineEmojiEmotions} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL,createPost, editPost} from './postSlice';
import Picker from "emoji-picker-react";

const PostModal = ({showEmojiContainer,setShowEmojiContainer}) => {
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const postState = useSelector(state => state.post);
    const{selectedPost,isModalOpen,isEditModeOn} = postState
    const dispatch = useDispatch() 
  // usestates
    const [postContent,setPostContent] = useState('' );
    const [postImg,setPostImg] = useState({})   

   // add emoji
  const onEmojiClick = (event,emojiObject)=>{
    setPostContent((prev)=>prev + emojiObject.emoji)
    setShowEmojiContainer(false)
  }
    
  // upload img
    const uploadImage = async(e)=>{
      try{
        const data = new FormData();
        data.append("file", e.target?.files[0]);
        data.append("upload_preset",process.env.REACT_APP_UPLOAD_PRESET);
        data.append("cloud_name",process.env.REACT_APP_CLOUD_NAME)
        const requestOptions = {
          method: "POST",
          body: data,
        };
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
          requestOptions
        )
        const { url, original_filename } = await response.json();
        setPostImg({url,original_filename})       
      }catch(err){console.error(err)}
    }

    const submitPostHandler = async (e)=>{
        e.preventDefault();
        let token = user?.token
        let postData = {
          content:postContent ,
          postImg,         
        }
         
        if(isEditModeOn){ 
          dispatch(editPost({token,postId:selectedPost._id,postData}))
        }else{
        dispatch(createPost({token,postData}))
        }              
      setPostContent('') ;
      setPostImg('')
      dispatch(CLOSE_MODAL())   
    }

    const closeModal = ()=>{
      dispatch(CLOSE_MODAL())
      setPostImg({});
      setPostContent('')
    }
   
  return (
    isModalOpen && (
    <section className="overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 z-30">
      <div onClick={closeModal} className="modal_backdrop"></div>
      <div className="my-16 mx-auto bg-white relative w-11/12 max-w-[28rem] max-h-[500px] min-h-[200px] z-20 flex flex-col p-4 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-lg p-1 text-gray-dark">Share your vivid thoughts!</h2>
            <button className="px-3" onClick={() => closeModal()}>
              <MdClose size="1.5rem" />
            </button>
          </div>
          <form onSubmit={submitPostHandler}>
              <textarea name="postContent" onChange={(e)=>setPostContent(e.target.value)} value={postContent || selectedPost?.content} 
              id="post_content" placeholder="What's on your mind?" rows="3" className='w-full'></textarea>

              <div className="flex justify-between items-center mt-4">
                <div className='flex'>
                  <label className="post-btn-upload flex items-center cursor-pointer" >
                      <MdPhoto className="text-3xl text-gray-dark hover:text-primary" title={"Upload Image"} />
                      <input type="file" accept="image/*" name="postImage" id="post-image" className="hidden" onChange={uploadImage} />
                          <small className="text-gray-400 text-xs">{postImg.original_filename?.length > 20 ? postImg?.original_filename.substring(0,20)+"...": postImg?.original_filename}</small>
                  </label>
                  <span className='px-3 cursor-pointer' onClick={()=>setShowEmojiContainer(prev=>!prev)}>
                    <MdOutlineEmojiEmotions className="text-3xl text-gray-dark hover:text-primary" title='add emoji'/>
                  </span>
                </div> 
                  <button type="submit" disabled={postContent ===''||postImg==={}?'disabled':''} className={`bg-primary py-1 px-3 rounded hover:bg-primary-dark ${postContent ==='' || postImg==={} ?'cursor-no-drop hover:opacity-50' :''} `}>
                      {selectedPost ? 'update' : 'add'}
                  </button>
                  
              </div>
              {showEmojiContainer && 
                  <Picker 
                  pickerStyle={{ height: "200px", margin: "0.5rem" }}
                  disableSearchBar={true}
                  onEmojiClick={onEmojiClick}
                  disableAutoFocus={true}
                  native />}
          </form>
      </div>
    </section>)
  )
}
export default PostModal