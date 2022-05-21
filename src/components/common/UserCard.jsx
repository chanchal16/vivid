import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const UserCard = ({user,numberOfPosts}) => {
    let {allUsers} = useSelector((state) => state.users);
     // check currUser
     const currUserProfile = allUsers?.find((user) => user.username === user.username)
  return (
    <div className="bg-white p-2 rounded flex gap-x-2 shadow-sm justify-between items-center">
        <div className="flex gap-x-2 flex-grow">
            <Link to={"/profile/"+user._id} aria-label={user.name}>
                <img
                className="w-12 h-12 rounded-full"
                src={  user.avatarUrl }
                alt={user.username}
                />
            </Link>
                       
            <div className="flex flex-col">
                <Link to={"/profile/"+user.username} aria-label={user.name} className='text-primary-dark hover:text-pista-dark' >
                    <h3>{user.name}</h3>
                </Link>
                <small className="text-gray">@{user.username}</small>
            </div>
        </div>
    </div>
  )
}
