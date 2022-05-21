import { UserCard } from 'components/common/UserCard';
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { checkCurrentUser } from 'utils/check-if-exists';
import { getAllUsers } from './profileSlice';

export const SuggestedUsers = () => {
    let {profileStatus,allUsers} = useSelector((state) => state.users);
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const dispatch = useDispatch()
    const currUser = checkCurrentUser(allUsers,user?.user?.username)
    console.log('curuser',currUser)

    useEffect(() => {
      dispatch(getAllUsers())     
    }, [dispatch]);

    const suggestedUsers = allUsers
		.filter(
			(usr) =>!checkCurrentUser( currUser?.following,usr.username,) &&
				user?.user.username !== usr.username
		)
		.slice(0, 3);
	console.log('suggested',suggestedUsers);
    
  return (
    <section className="p-4 flex flex-col">
        <h4 className="text-lg font-semibold mb-2 text-gray">Suggested Users</h4>
            {
                profileStatus === "Loading"
                && 
                <div className="flex items-center justify-center h-24">
                    <ImSpinner8 className="loading-icon text-purple-600 text-lg"/>
                </div>
            }

            {
                profileStatus === "Fulfilled"
                && 
                <div className="">
                    {
                        suggestedUsers.map(contributor => {
                            return(
                                <div className="mb-2" >
                                    <UserCard user={contributor}  /> 
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                profileStatus === "Rejected"
                && <span className="text-sm text-gray-400">Something went wrong. Please refresh!</span>
            }
    </section>
  )
}
