import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

// get all users
export const getAllUsers = createAsyncThunk(
	"users/getAllUsers",
	async () => {
		try {
			const {data} = await axios.get('/api/users');
			console.log('data-of-all-users',data)
			return data.users;
		} catch (err) {
			console.error(err);
		}
	}
);

// get user
export const getUser = createAsyncThunk("users/getUser",async(username)=>{
	try{
		const {data} = await axios.get(`/api/users/${username}`)
		
		return data.user
	}catch(err){console.error(err)}
})

// edit user
export const updateUser = createAsyncThunk(
	"users/updatePost",
	async ({ token, userData, }) => {
		try {
			const {data} = await axios.post(`/api/users/edit`,{userData}, 
            {headers:{authorization:token}});
			return data.user;
		} catch (err) {
			console.error(err)
		}
	}
);
// get user posts
export const getUserPost = createAsyncThunk(
	"users/getUserPost",
	async ( username ) => {
		try {
			const {data} = await axios.get(`/api/posts/user/${username}`);
			console.log('data',data)
			return data.posts;
		} catch (err) {
			console.error(err)
		}
	}
);

const initialState = {
	userProfileToShow: {},
	userPosts: [],
	allUsers: [],
    profileStatus:'idle',
};

const profileSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		resetProfile: (state) => {
			state.userProfileToShow = null;
			state.userPosts = [];
		},
	},
	extraReducers: (builder) => {
		builder
		// get user		
		.addCase(getUser.fulfilled,(state,action) =>{
		  state.profileStatus = 'Fulfilled';
		  state.userProfileToShow = action.payload
		})
		.addCase(getUser.rejected,(state) =>{
		  state.profileStatus = 'Rejected'
		})
		// get usr post
		.addCase(getUserPost.pending, (state) =>{
		  state.profileStatus = 'Loading';
		})
		.addCase(getUserPost.fulfilled, (state,action) =>{
		  state.profileStatus = 'Fulfilled';
		  state.userPosts = action.payload;
		})
		.addCase(getUserPost.rejected, (state) =>{
		  state.profileStatus = 'Rejected';
		})
		.addCase(getAllUsers.fulfilled, (state,action) =>{
			state.profileStatus = 'Fulfilled';
			state.allUsers = action.payload;
		})
		.addCase(updateUser.pending,(state)=>{
			state.profileStatus = 'Loading'
		})
		.addCase(updateUser.fulfilled,(state,action)=>{
			state.allUsers = state.allUsers.map((user) =>
				user.username === action.payload.username ? action.payload : user
			);
			state.userProfileToShow = action.payload;
			state.profileStatus = 'Fulfilled'
		})
		.addCase(updateUser.rejected,(state)=>{
			state.profileStatus = 'Rejected';
		})
		
	  }
});

export default profileSlice.reducer;
export const { resetProfile,SHOW_PROFILE_MODAL,CLOSE_PROFILE_MODAL } = profileSlice.actions;