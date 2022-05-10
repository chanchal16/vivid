import React from 'react'
import {NavLink} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { MdOutlineExplore,  MdAddCircleOutline, MdOutlineBookmarkBorder, MdPersonOutline } from 'react-icons/md';
import {GiStaryu} from "react-icons/gi";
import {HiOutlineHome} from "react-icons/hi";

export const Navbar = () => {
    const {authState} = useAuth();
    
  return (
    <div className="app-container flex items-center md:justify-between p-2.5 bg-white text-lg">
       {/* hide on mobile */}
        <NavLink to="/" className="app-navbar-logo hidden md:block">
            <span className="flex items-center text-primary hover:text-pista">
                <GiStaryu className="mr-1 " /> 
                Vivid
            </span>
        </NavLink>
        <div className="flex items-center flex-grow md:justify-end">
            <ul className="flex flex-grow md:flex-initial items-center justify-between md:gap-x-4 flex-wrap">
                <li>
                    <NavLink end to="/" className="flex items-center" aria-label="Home">
                        <HiOutlineHome size='1.5rem' />
                    </NavLink>
                </li>
                <li>
                    <NavLink end to="/explore" className="flex items-center" aria-label="Search">
                        <MdOutlineExplore size='1.5rem' />
                    </NavLink>
                </li>              
                    <li>
                        <NavLink end to="/addpost" className="flex items-center" aria-label="Add post">
                            <MdAddCircleOutline size='1.5rem' />
                        </NavLink>
                    </li>            
                <li>
                    <NavLink end to="/bookmarks" className="flex items-center relative" aria-label="Notifications">
                        <MdOutlineBookmarkBorder size='1.5rem' />
                    </NavLink>
                </li>

                <li>
                    <NavLink end to={"/profile/"} className="flex items-center profile-pic" aria-label="User Profile">
                        {
                            authState?.userAvatar ? 
                            <img src={authState?.userAvatar} alt="User" />
                            :
                            <MdPersonOutline size='1.5rem' />
                        }
                    </NavLink>
                </li>
            </ul>
        </div> 
    </div>
  )
}
