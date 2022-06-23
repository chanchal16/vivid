import React,{useState,Suspense} from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {MdKeyboardArrowRight} from "react-icons/md";
import { FollowerListPopup } from './FollowerListPopup';

export const FollowerSection = ({username}) => {
    let {userProfileToShow} = useSelector((state) => state.users) 

    const initialPopupState = {
        listType: "",
        listOfProfiles: [],
        isPopupOpen: false
    }
    const [followerPopupState, setFollowerPopupState] = useState(initialPopupState);

      // open popup
      function openFollowPopup(typeOfList, profileList){
        setFollowerPopupState(prevState => (
            { 
                listType: typeOfList,
                listOfProfiles: profileList,
                isPopupOpen: true
            }
        ));
    }

    function closePopup(){
        setFollowerPopupState(prevState => (
            { 
                ...prevState,
                isPopupOpen: false
            }
        ));
    }
  return (
    <section className='bg-white p-2 mt-4'>
        <div className="user-followers">
            <div className="flex items-center justify-between">
                <h3 className="text-gray-dark text-sm">Followers {userProfileToShow?.followers?.length ? "("+userProfileToShow?.followers?.length+")" : ""}
                </h3>
                {
                    userProfileToShow?.followers?.length > 0 &&
                    <button onClick={() => openFollowPopup("Followers", userProfileToShow?.followers)} className="text-xs flex items-center text-primary-dark hover:text-pista-dark">
                        Show all <MdKeyboardArrowRight />
                    </button>
                }
            </div>
            <div className="overflow-hidden grid grid-cols-5 md:grid-cols-4 lg:grid-cols-5 mt-2">
                {
                    userProfileToShow?.followers?.length > 0 ?
                    userProfileToShow?.followers.slice(0, 4).map(follower => {
                        return(
                            <Link to={`/profile/${follower.username}`} key={follower.username} title={follower.username}>
                                <img className="w-12 h-12 rounded-full" src={follower.avatarUrl} />
                            </Link>
                        )
                    })
                    :
                    <small className="text-gray col-span-4">Not followed by anyone</small>                        
                }

            </div>
        </div>
        
        <hr className="my-4 text-gray" />
        
        <div className="user-following">
            <div className="flex justify-between items-center">
                <h3 className="text-gray-dark text-sm">Following {userProfileToShow?.following?.length ? "("+userProfileToShow?.following?.length+")" : ""}</h3>
                {
                    userProfileToShow?.following?.length > 0 &&
                    <button onClick={() => openFollowPopup("Following", userProfileToShow?.following)} className="text-xs flex items-center text-primary-dark hover:text-pista-dark">
                        Show all <MdKeyboardArrowRight />
                    </button>
                }
            </div>

            <div className="overflow-hidden grid grid-cols-5 md:grid-cols-4 lg:grid-cols-5 mt-2">
                {
                    userProfileToShow?.following?.length > 0 ?
                    userProfileToShow?.following?.slice(0, 4).map(following => {
                        return(
                            <Link to={`/profile/${following.username}`} key={following.username} title={following.username}>
                                <img className="w-12 h-12 rounded-full" key={following._id}  src={following.avatarUrl} />
                            </Link>
                        )
                    })
                    :
                    <small className="text-gray col-span-4">Not following anyone</small>                        
                }
            </div>
        </div>

        {
            followerPopupState.isPopupOpen && 
            <Suspense fallback={<div></div>}>
                <FollowerListPopup followerPopupData = {followerPopupState} closePopup={closePopup} />    
            </Suspense>
        }
    </section>
  )
}
