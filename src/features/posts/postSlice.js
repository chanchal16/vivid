import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  allPosts:[],
  userPosts:[],
  status: 'Idle',
  isModalOpen:false,
  selectedPost:null
}
// get all posts
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await axios.get("/api/posts");
    return data.posts;
  } catch (error) {
    console.log(error);
  }
});
// add post
export const createPost = createAsyncThunk("posts/createPost", async ({token,postData}) => {
  try {
    const { data }= await axios.post('/api/posts',{postData},
        {
            headers:{authorization:token}
        })
			return data.posts;
  } catch (error) {
    console.log(error.response);
  }
});
// delete post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId }) => {
    try {
      const { data } = await axios.delete(`/api/posts/${postId}`);
      return data.posts;
    } catch (error) {
      console.log(error);
    }
  }
);


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      SHOW_MODAL:(state,action) =>{
        state.isModalOpen = true;
        if(action.payload)state.selectedPost = action.payload
      },
      CLOSE_MODAL:(state,action) =>{
        state.isModalOpen = false
        state.selectedPost = null
      }      
    },
    extraReducers: (builder) => {
      builder
      // get post
      .addCase(getPosts.pending,(state) =>{
        state.status = 'Loading'
      })
      .addCase(getPosts.fulfilled,(state,action) =>{
        state.status = 'Fulfilled';
        state.allPosts = action.payload
      })
      .addCase(getPosts.rejected,(state) =>{
        state.status = 'Rejected'
      })
      // add post
      .addCase(createPost.pending, (state) =>{
        state.status = 'Loading';
      })
      .addCase(createPost.fulfilled, (state,action) =>{
        state.status = 'Fulfilled';
        state.allPosts = action.payload;
      })
      .addCase(createPost.rejected, (state) =>{
        state.status = 'Rejected';
      })
      // delete post
			.addCase(deletePost.fulfilled, (state, action) => {
				state.allPosts = state.allPosts.filter(post=> post._id !== action.meta.arg)
				state.userPosts = state.userPosts.filter(post=>post._id !== action.payload)
			})
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { SHOW_MODAL, CLOSE_MODAL } = postSlice.actions
  export default postSlice.reducer