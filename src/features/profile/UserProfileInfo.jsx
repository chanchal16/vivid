import React from 'react'
import { FaBirthdayCake} from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { followUser, unFollowUser } from './profileSlice';
import { useParams} from "react-router-dom";

export const UserProfileInfo = ({userData}) => {
    const {user} = useSelector(state => state.auth)
    const{token} = user
    const {username} = useParams();
    const dispatch = useDispatch()
    // check if following 
    const isFollowing = userData?.followers.some(user=>user.username !== username)   

    const followUnfollowHandler = ()=>{
        if(isFollowing){
            dispatch(unFollowUser({token,userId:userData._id}))
        }else{
            dispatch(followUser({token,userId:userData._id}))
        }
    }

  return (
    <div className="p-2 md:px-4 md:py-2">
        <div className="flex justify-between">
            <div className="">
                <h3 className=" text-xl mb-1">{userData.name}</h3>
                <h3 className="text-gray-dark text-md mb-1">@{userData.username}</h3>
            </div>
            {
                user?.user.username !== userData.username ? (
                    <div>
                        <button className="bg-primary p-1 rounded hover:bg-pista-dark"
                        onClick={followUnfollowHandler}>
                            {isFollowing ? 'unfollow' : 'follow'}
                        </button>
                    </div>
                    
                ) :(
                    null
                )
            }
        </div>
        <p className="text-gray text-sm">
            {userData.bio}
        </p>
        
        <div className="flex my-2 gap-4 flex-wrap">
        {
            userData.portfolio &&
            <div className="user-location flex items-center gap-x-1 text-sm text-gray">
                {userData.portfolio}
            </div>
        }

            <div className="user-joined flex items-center gap-x-1 text-sm text-gray">
                <FaBirthdayCake className="" /> 
                <span>Joined :</span>
                {new Date(userData.createdAt).toDateString().substring(4)}
            </div>
        </div>
    </div>
  )
}
