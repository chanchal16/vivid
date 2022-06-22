import { UserCard } from 'components/common/UserCard';
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { checkCurrentUser } from 'utils/check-if-exists';
import { getAllUsers } from './profileSlice';
import { ImSpinner8 } from 'react-icons/im';

const SuggestedUsers = () => {
    let {allUsers,suggestedUserStatus} = useSelector((state) => state.users);
    const authState = useSelector(state => state.auth);
    let{user} = authState;
    const dispatch = useDispatch()
    const currUser = checkCurrentUser(allUsers,user?.user?.username)

    useEffect(() => {
      dispatch(getAllUsers())     
    }, [dispatch]);

    const suggestedUsers = allUsers?.filter(curruser=>!checkCurrentUser(currUser?.following,curruser.username)
        && curruser.username !== user?.user?.username).slice(0,3)
    
  return (
    <section className="sticky top-0 p-4 flex flex-col">
        <h4 className="text-lg font-semibold mb-2 text-gray">Suggested Users</h4>
            {
                suggestedUserStatus == "Loading"
                && 
                <div className="flex items-center justify-center h-24">
                    <ImSpinner8 className="loading-icon text-primary-dark text-2xl"/>
                </div>
            }

            {
                suggestedUserStatus == "Fulfilled"
                && 
                <div className="">
                    {
                        suggestedUsers.map(user => {
                            return(
                                <div className="mb-2" key={user.username}>
                                    <UserCard User={user}  /> 
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                suggestedUserStatus === "Rejected"
                && <span className="text-sm text-gray">Something went wrong. Please refresh!</span>
            }
    </section>
  )
}
export default SuggestedUsers