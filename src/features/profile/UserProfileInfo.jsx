import React from 'react'
import { FaBirthdayCake, FaMapMarkerAlt} from 'react-icons/fa';

export const UserProfileInfo = ({userData}) => {

  return (
    <div className="p-2 md:px-4 md:py-2">
        <div className="flex justify-between">
            <div className="">
                <h3 className="text-gray text-xl mb-1">{userData.name}</h3>
                <h3 className="text-gray text-md mb-1">@{userData.username}</h3>
            </div>

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
