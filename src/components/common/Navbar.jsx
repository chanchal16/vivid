import React from 'react'
import {NavLink,Link,useNavigate} from 'react-router-dom';
import { MdOutlineExplore,  MdAddCircleOutline, MdOutlineBookmarkBorder, MdPersonOutline } from 'react-icons/md';
import {GiStaryu} from "react-icons/gi";
import {HiOutlineHome} from "react-icons/hi";
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const navigate = useNavigate()
    
  return (
    <nav className='bg-white'>
    <div className="app-container flex items-center md:justify-between p-2.5  text-lg">
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
                    { user?.user ? (
                    <NavLink end to={"/profile"} className="flex items-center profile-pic" aria-label="User Profile">
                        <MdPersonOutline size='1.5rem' />
                    </NavLink>) : (
                        
                        <button onClick={()=>navigate('/login')}
                        className="bg-primary px-1.5 py-0.5 text-base rounded hover:bg-primary-dark">
                            Login
                        </button>
                    )}
                </li>
            </ul>
        </div> 
    </div>
    </nav>
  )
}
