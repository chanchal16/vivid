import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { followUser } from 'features/profile/profileSlice';

export const UserCard = ({User,close}) => { 
    let {user} = useSelector(state => state.auth);
    let{token} = user
    const dispatch = useDispatch()

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
            <div className='ml-auto self-center'>
                <button className='text-sm py-0.5 px-1 border-[1.2px] border-r-primary rounded text-primary-dark  hover:bg-primary-dark hover:text-white'
                onClick={()=>dispatch(followUser({token,userId:User?._id}))} >
                    Follow
                </button>
            </div>
        </div>
    </div>
  )
}
