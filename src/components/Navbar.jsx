import React from 'react'
import {NavLink,Link,useNavigate} from 'react-router-dom';
import { MdOutlineExplore,  MdAddCircleOutline, MdOutlineBookmarkBorder, MdPersonOutline } from 'react-icons/md';
import {GiStaryu} from "react-icons/gi";
import {HiOutlineHome} from "react-icons/hi";
import { useSelector,useDispatch } from 'react-redux';
import { SHOW_MODAL } from 'features/posts/postSlice';

export const Navbar = () => {
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const postState = useSelector(state => state.post)
    const {bookmarkList} = postState
    const dispatch = useDispatch()
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
                    <NavLink end to="/" className=" link flex items-center" aria-label="Home">
                        <HiOutlineHome size='1.5rem' />
                    </NavLink>
                </li>
                <li>
                    <NavLink end to="/explore" className="link flex items-center" aria-label="Search">
                        <MdOutlineExplore size='1.5rem' />
                    </NavLink>
                </li>              
                    <li>
                        <span onClick={() => dispatch(SHOW_MODAL())} className=" link flex items-center" aria-label="Add post">
                            <MdAddCircleOutline size='1.5rem' />
                        </span>
                    </li>            
                <li>
                    <NavLink end to="/bookmarks" className=" link flex items-center relative" aria-label="Notifications">
                        <MdOutlineBookmarkBorder size='1.5rem' />
                        {bookmarkList?.length>0? <div className='absolute rounded-full p-1 left-4 bottom-5 bg-primary'></div> : null}
                    </NavLink>
                </li>

                <li>
                    { user?.user ? (
                    <NavLink end to={`/profile/${user?.user?.username}`} className="link flex items-center profile-pic" aria-label="User Profile">
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
