import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

// get all users
export const getAllUsers = createAsyncThunk(
	"users/getAllUsers",
	async () => {
		try {
			const {data} = await axios.get('/api/users');
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
			toast.success('User profile updated!')
			return data.user;
		} catch (err) {
			console.error(err);
			toast.error("Error while updating user")
		}
	}
);
// get user posts
export const getUserPost = createAsyncThunk(
	"users/getUserPost",
	async ( username ) => {
		try {
			const {data} = await axios.get(`/api/posts/user/${username}`);			
			return data.posts;
		} catch (err) {
			console.error(err)
		}
	}
);
// follow user
export const followUser = createAsyncThunk("users/followUser",async({token,userId})=>{
	try{
		const {data} = await axios.post(`/api/users/follow/${userId}`,{},
		{headers:{authorization:token}})
		return data
	}catch(err){
		console.error(err);
	}
})
// unfollow user
export const unFollowUser = createAsyncThunk("users/unFollowUser",async({token,userId})=>{
	try{
		const {data} = await axios.post(`/api/users/unfollow/${userId}`,{},
		{headers:{authorization:token}})
		return data
	}catch(err){console.error(err)}
})

const initialState = {
	userProfileToShow: {},
	userPosts: [],
	allUsers: [],
    profileStatus:'Idle',
	suggestedUserStatus:'Idle'
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
		.addCase(getUser.pending,(state)=>{
			state.suggestedUserStatus = 'Loading'
		})	
		.addCase(getUser.fulfilled,(state,action) =>{
		  state.suggestedUserStatus = 'Fulfilled';
		  state.userProfileToShow = action.payload
		})
		.addCase(getUser.rejected,(state) =>{
		  state.suggestedUserStatus = 'Rejected'
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
		.addCase(getAllUsers.pending,(state)=>{
			state.suggestedUserStatus = 'Loading'
		})
		.addCase(getAllUsers.fulfilled, (state,action) =>{
			state.suggestedUserStatus = 'Fulfilled';
			state.allUsers = action.payload;
		})
		.addCase(getAllUsers.rejected,(state)=>{
			state.suggestedUserStatus = 'Rejected'
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
		// follow user
		.addCase(followUser.fulfilled,(state,action)=>{
			state.profileStatus = 'Fulfilled'
			const{user,followUser} = action.payload
			state.allUsers = state.allUsers.map(curruser=>curruser.username === user.username ? user :
				curruser.username === followUser.username ? followUser : curruser)
			state.userProfileToShow = action.payload.followUser;			
		})
		.addCase(followUser.rejected,(state)=>{
			state.profileStatus = 'Rejected'
		})
		.addCase(unFollowUser.fulfilled,(state,action)=>{
			state.profileStatus = 'Fulfilled'
			const{user,followUser} = action.payload
			state.allUsers = state.allUsers.map(curruser=>curruser.username === user.username ? user :
				curruser.username === followUser.username ? followUser : curruser)			
			state.userProfileToShow = action.payload.followUser;			
		})		
	  }
});

export default profileSlice.reducer;
export const { resetProfile,SHOW_PROFILE_MODAL,CLOSE_PROFILE_MODAL } = profileSlice.actions;