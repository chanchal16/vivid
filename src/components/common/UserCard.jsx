import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from 'features/profile/profileSlice';

export const UserCard = ({User,close}) => { 
    let {user} = useSelector(state => state.auth);
    let{token} = user
    const dispatch = useDispatch()
    const isFollowing = user?.user?.following?.includes( User?.username)

    const followUnfollowHandler = (userId)=>{
        if(isFollowing){
            dispatch(unFollowUser({token,userId}))
        }else{
            dispatch(followUser({token,userId}))
        }
    }
  return (
    <div className="bg-white p-2 rounded flex gap-x-2 shadow-sm justify-between items-center">
        <div className="flex gap-x-2 flex-grow">
            <Link to={"/profile/"+User?.username} aria-label={User?.name} onClick={close}>
                <img
                className="w-12 h-12 rounded-full"
                src={  User?.avatarUrl }
                alt={User?.username}
                />
            </Link>
                       
            <div className="flex flex-col">
                <Link to={"/profile/"+User?.username} aria-label={User?.name} onClick={close}
                className='text-primary-dark hover:text-pista-dark' >
                    <h3>{User?.name}</h3>
                </Link>
                <small className="text-gray-dark">@{User?.username}</small>
            </div>
            <button className='text-sm self-start py-0.5 text-primary-dark ml-auto hover:text-pista-dark'
            onClick={()=>followUnfollowHandler(User?._id)} >
                {isFollowing ? 'unfollow' : 'follow'}
            </button>
        </div>
    </div>
  )
}
