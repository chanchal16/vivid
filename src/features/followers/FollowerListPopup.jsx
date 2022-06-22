import React from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md';

export const FollowerListPopup = ({ followerPopupData, closePopup }) => {
  return (
    <section className=' overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0 bottom-0 z-30'>
      <div onClick={closePopup} className="modal_backdrop"></div>

      <div className="my-16 mx-auto bg-white relative w-11/12 max-w-[25rem] max-h-[500px] min-h-[200px] z-20 flex flex-col p-4 rounded-lg">
        <h4>{followerPopupData.listType} <small className="text-gray-400">({followerPopupData.listOfProfiles.length})</small></h4>

        <ul className="overflow-auto">
            {
                followerPopupData.listOfProfiles.map(profile => {
                    return (
                        <li key={profile.username} className="my-2 border border-light  shadow-sm p-1">
                            {
                                followerPopupData.listType === "Followers" ?                               
                                <div className="flex gap-x-2 justify-between items-center">
                                    <div className="flex gap-x-2">
                                        <Link to={"/profile/"+profile.username} onClick={closePopup} >
                                            <img className="w-14 h-14 rounded-full" src={profile.avatarUrl} />
                                        </Link>
                                        
                                        <div className="flex flex-col">
                                            <Link to={"/profile/"+profile.username} onClick={closePopup}
                                            className='text-primary-dark hover:text-pista-dark'>
                                                <h3>{profile.name}</h3>
                                            </Link>
                                            <small className="text-gray-dark px-1">{profile.username}</small>
                                        </div>
                                    </div>
                                </div>
                                : 
                                <div className="flex gap-x-2 justify-between items-center">
                                    <div className="flex gap-x-2">
                                        <Link to={"/profile/"+profile.username} onClick={closePopup} >
                                            <img className="w-14 h-14 rounded-full" src={profile.avatarUrl} />
                                        </Link>
                                        
                                        <div className="flex flex-col">
                                            <Link to={"/profile/"+profile.username} onClick={closePopup}
                                            className='text-primary-dark hover:text-pista-dark'>
                                                <h3>{profile.name}</h3>
                                            </Link>
                                            <small className="text-gray-dark px-1">{profile.username}</small>
                                        </div>
                                    </div>
                                </div>
                            }
                        </li>
                    )
                })
            }            
        </ul>

        <button type="button" className="rounded flex justify-center items-center 
        text-lg -top-2 -right-2 absolute bg-light border-none" onClick={closePopup}>
            <MdClose />
        </button>
      </div>
    </section>
  )
}
