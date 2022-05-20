import { UserProfileInfo } from 'features/profile/UserProfileInfo';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import {resetProfile,getUserPost,getUser, getAllUsers} from 'features/profile/profileSlice'
import {MdSettings} from "react-icons/md";
import { PostCard } from 'components/common/PostCard';

export const Profile = () => {
    const dispatch = useDispatch();
	const {username} = useParams();
    let {userProfileToShow,userPosts} = useSelector((state) => state.users)   

    const authState = useSelector(state => state.auth);
    let{user} = authState;
    let { allPosts } = useSelector((state) => state.post);
	
    useEffect(() => {
			dispatch(getUser(username ));
			dispatch(getUserPost( username ));
            dispatch(getAllUsers())
    }, [username,dispatch])

    useEffect(() => dispatch(getUserPost( username )), [allPosts]);
  return (
    <div className="w-full mb-12">
         <div className="button-group flex-grow flex justify-end gap-x-2 items-end">
            {
                user.user?.username === username ? 
                <Link to={'/profile/edit'}  className="text-primary-dark hover:text-pista-dark flex items-center p-2 text-xs md:text-sm">
                    <MdSettings className="mr-1" /> Edit Profile
                </Link>
                : null
            }
            <button className="text-purple-700 hover:text-yellow-500 p-2 text-xs md:text-sm">
                Logout
            </button>
        </div>
        <div className="flex items-start flex-wrap md:flex-nowrap">
            <div className="">
                <img className="w-20 h-20 rounded-full" src={userProfileToShow?.avatarUrl} />
            </div>
            <div className="flex-grow">
                {userProfileToShow?.name && (<UserProfileInfo userData={userProfileToShow} />)}
            </div>    
        </div>
        <hr className='text-gray ' />
        {/* user posts */}
        <section className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="mt-4 col-span-12 md:col-span-8">
                <h3 className="text-gray md:hidden text-lg my-2">Posts 
                <small className="text-gray">{userPosts.length ? "("+userPosts.length+")" : ""}</small></h3>
                {
                    userPosts.length >0 && userPosts.map(post=>(
                        <PostCard post={post} key={post._id} avatar={userProfileToShow.avatarUrl}/>
                    ))
                }
            </div>
        </section>
    </div>
  )
}
