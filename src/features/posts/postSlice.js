import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import axios from 'axios';
import { followUser, unFollowUser } from 'features/profile/profileSlice';
import { toast } from "react-toastify";

const initialState = {
  allPosts:[],
  bookmarkList:[],
  status: 'Idle',
  isModalOpen:false,
  selectedPost:null,
  isEditModeOn:false,
  sortPostType:'',
  feedStatus:'Idle',
  userFollowing:{}
}
// get all posts
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await axios.get("/api/posts");
    return data.posts;
  } catch (err) {
    console.log(err);
  }
});
// add post
export const createPost = createAsyncThunk("posts/createPost", async ({token,postData}) => {
  try {
    const { data }= await axios.post('/api/posts',{postData},
        {
            headers:{authorization:token}
        })
    toast.success('Post created successfully!')
		return data.posts;
  } catch (err) {
    console.log(err);
    toast.error("Can't add post:-(")
  }
});
// edit post
export const editPost = createAsyncThunk("posts/editPost", async({token,postId,postData})=>{
  try{
    const {data} = await axios.post(`/api/posts/edit/${postId}`,{postData},
    {headers:{authorization:token}})
    toast.success('Post updated successfully!')
    return data.posts;
  }catch(err){
    console.error(err);
    toast.error("Can't update post:-(")
  }
})
// delete post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({token, postId }) => {
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`,
      {headers:{authorization:token}});
      toast.success('Post deleted!')
      return data.posts;
    } catch (err) {
      console.log(err);
      toast.error("Can't delete post:-(")
    }
  }
);
// like a post
export const likePost = createAsyncThunk("posts/likePost",async({token,postId})=>{
  try{
    const {data} = await axios.post(`/api/posts/like/${postId}`,{},
    {headers:{authorization:token}}
    );
    return data.posts;
  }catch(err){    
    console.error(err)
  }
})
// unlike post
export const unLikePost = createAsyncThunk(
  "posts/unLikePost",
  async ({token,postId }) => {
    try {
      const {data} = await axios.post(`/api/posts/dislike/${postId}`,{},
      {headers:{authorization:token}}
      );
      return data.posts;
    } catch (err) {      
      console.error(err)
    }
});
// get bookmarks
export const getBookmarks = createAsyncThunk("posts/getBookmarks",async({token})=>{
  try{
    const {data} = await axios.get(`/api/users/bookmark`,
    {headers:{authorization:token}});
    return data.bookmarks
  }catch(err){   
    console.error(err);
    toast.warn("Can't get bookmarks")
  }
})
// bookmark a post
export const addToBookmarks = createAsyncThunk("posts/addToBookmarks",async({token,postId})=>{
  try{
    const {data} = await axios.post(`/api/users/bookmark/${postId}`,{},
    {headers:{authorization:token}});
    toast.success('Post bookmarked successfully!')
    return data.bookmarks
  }catch(err){
    console.error(err)
    toast.error("Can't bookmark post:-(")
  }
})
// remove from bookmark
export const removeFromBookmarks = createAsyncThunk("posts/removeFromBookmarks",async({token,postId})=>{
  try{
    const {data} = await axios.post(`/api/users/remove-bookmark/${postId}`,{},
    {headers:{authorization:token}});
    toast.success('Post removed successfully!')
    return data.bookmarks
  }catch(err){
    console.error(err);
    toast.error("Can't remove post:-(")
  }
})
// comments
export const getComments = createAsyncThunk("posts/getComments", async ({token,postId}) => {
  try {
    const { data } = await axios.get(`/api/comments/${postId}`,
    {headers:{authorization:token}});
    return data.posts.comments;
  } catch (err) {
    console.log(err);
  }
});
// comment on a post
export const addComment = createAsyncThunk("posts/addComment",async({token,postId,commentData})=>{
  try{
    const {data} = await axios.post(`/api/comments/add/${postId}`,{commentData},
    {headers:{authorization:token}});
    toast.success('comment added')
    return data.posts
  }catch(err){
    console.error(err)
    toast.error("Can't add comment")
  }
})
// delete a comment
export const removeComment = createAsyncThunk("posts/removeComment",async({token,postId,commentId})=>{
  try{
    const {data} = await axios.post(`/api/comments/delete/${postId}/${commentId}`,{},
    {headers:{authorization:token}});
    toast.success('comment deleted!')
    return data.posts
  }catch(err){
    console.error(err)
    toast.error("Can't delete a comment:-(")
  }
})

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      SORT_POST_TYPE:(state,action)=>{
        state.sortPostType = action.payload
      },
      SHOW_MODAL:(state,action) =>{
        state.isModalOpen = true;
        state.selectedPost = action.payload
        state.isEditModeOn = action.payload ? true : false
      },
      CLOSE_MODAL:(state) =>{
        state.isModalOpen = false
        state.selectedPost = null
      }
    },
    extraReducers: (builder) => {
      builder
      // get post
      .addCase(getPosts.pending,(state) =>{
        state.feedStatus = 'Loading'
      })
      .addCase(getPosts.fulfilled,(state,action) =>{
        state.feedStatus = 'Fulfilled';
        state.allPosts = action.payload
      })
      .addCase(getPosts.rejected,(state) =>{
        state.feedStatus = 'Rejected'
        console.log(action.error.message)
      })
      // add post
      .addCase(createPost.pending, (state) =>{
        state.status = 'Loading';
      })
      .addCase(createPost.fulfilled, (state,action) =>{
        state.status = 'Fulfilled';
        state.allPosts = action.payload;
      })
      .addCase(createPost.rejected, (state,action) =>{
        state.status = 'Rejected';
        console.log(action.error.message)
      })
      // edit post
      .addCase(editPost.fulfilled,(state,action)=>{
        state.status = 'Fulfilled'
        state.allPosts = action.payload;
        state.selectedPost = null
       
      })
      .addCase(editPost.rejected,(state,action)=>{
        state.status = 'Rejected';
        console.log(action.payload)
      })
      // delete post
			.addCase(deletePost.fulfilled, (state, action) => {
        state.allPosts = action.payload
			})
      // like post
      .addCase(likePost.fulfilled,(state,action)=>{
        state.status = 'Fulfilled';
        state.allPosts = action.payload;
      })
      .addCase(likePost.rejected,(state,action)=>{ 
        state.status = 'Rejected';       
        console.log(action.error.message)
      })
      // unlike post
      .addCase(unLikePost.fulfilled,(state,action)=>{
        state.allPosts = action.payload
      })
      .addCase(unLikePost.rejected,(state,action)=>{
        state.status = 'Rejected';
        console.log(action.error.message)
      })
      // get bookmarks
      .addCase(getBookmarks.pending,(state)=>{
        state.status = 'Loading'
      })
      .addCase(getBookmarks.fulfilled,(state,action)=>{
        state.status = 'Fulfilled';
        state.bookmarkList = action.payload
      })
      .addCase(getBookmarks.rejected,(state,action)=>{
        state.status = 'Rejected';
        console.log(action.error.message)
      })
      // add to bookmark
      .addCase(addToBookmarks.pending,(state)=>{
        state.status = 'Loading';
      })
      .addCase(addToBookmarks.fulfilled,(state,action)=>{
        state.status = 'Fulfilled';
        state.bookmarkList = action.payload
      })
      .addCase(addToBookmarks.rejected,(state,action)=>{
        state.status = 'Rejected';
        console.log(action.error.message)
      })
      // remove from bookmark
      .addCase(removeFromBookmarks.pending,(state)=>{
        state.status = 'Loading';
      })
      .addCase(removeFromBookmarks.fulfilled,(state,action)=>{
        state.status = 'Fulfilled';
        state.bookmarkList = action.payload
      })
      .addCase(removeFromBookmarks.rejected,(state,action)=>{
        state.status = 'Rejected';
        console.log(action.error.message)
      })
      // get comments
      .addCase(getComments.pending,(state)=>{
        state.status = 'Loading'
      })
      .addCase(getComments.fulfilled,(state,action)=>{
        state.status = 'Fulfilled';
        state.allPosts = action.payload
      })
      .addCase(getComments.rejected,(state,action)=>{
        state.status = 'Rejected';
        console.log(action.error.message)
      })
      // add comment
      .addCase(addComment.pending,(state)=>{
        state.status = 'Loading';
      })
      .addCase(addComment.fulfilled,(state,action)=>{
        state.status = 'Fulfilled';
        state.allPosts = action.payload
      })
      .addCase(addComment.rejected,(state,action)=>{
        state.status = 'Rejected';
        console.log(action.error.message)
      })
      // remove from comments
      .addCase(removeComment.pending,(state)=>{
        state.status = 'Loading';
      })
      .addCase(removeComment.fulfilled,(state,action)=>{
        state.status = 'Fulfilled';
        state.allPosts = action.payload
      })
      .addCase(removeComment.rejected,(state,action)=>{
        state.status = 'Rejected';
        console.log(action.error.message)
      })
      .addCase(followUser.fulfilled,(state,action)=>{
        state.userFollowing = action.payload.user
      })
      .addCase(unFollowUser.fulfilled,(state,action)=>{
        state.userFollowing = action.payload.user
      })
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { SHOW_MODAL, CLOSE_MODAL,SORT_POST_TYPE } = postSlice.actions
  export default postSlice.reducer