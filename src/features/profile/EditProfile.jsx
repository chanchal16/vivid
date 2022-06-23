import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from './profileSlice';
import {MdKeyboardArrowLeft, MdSave} from 'react-icons/md';
import {ImSpinner8} from "react-icons/im";
import {useNavigate} from 'react-router-dom';

export const EditProfile = () => {
    let navigate = useNavigate();
    let {userProfileToShow,profileStatus} = useSelector((state) => state.users);
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const initialFormState = {
        user : userProfileToShow,
        isSubmitting: false,
        errorMessage: null
    }
    const [profileData, setProfileData] = useState({...initialFormState});
    const [changeAvatar, setChangeAvatar] = useState(false);

    // upload profile image
    const updateAvatar = async(e)=>{
        if(e.target.files?.length >0){
            setChangeAvatar(true);
        const data = new FormData();
			data.append("file", e.target.files[0]);
			data.append("upload_preset",'fryrvzcc');
            data.append("cloud_name","cr07")
			const requestOptions = {
				method: "POST",
				body: data,
			};
			await fetch(
				"https://api.cloudinary.com/v1_1/cr07/image/upload",
				requestOptions
			)
				.then((response) => response.json())
				.then((json) => {
                    console.log('json',json)
					setProfileData((prev) => ({ ...prev, user:{...prev.user,avatarUrl: json.url }}));
				})
				.catch((error) => {
					console.error(error);
				});
                setChangeAvatar(false);
        }
    }
    // handle input change
    const handleInputChange = (e)=>{
        setProfileData(prevState => ({
            ...prevState,
            user: {
                ...prevState.user,
                [e.target.name]: e.target.value 
            } 
        }))
    }

    const saveProfile =async (e)=>{
        let token = user?.token
        e.preventDefault();
        // start loading
        setProfileData(prevState => {
            return{
                ...prevState,
                isSubmitting : true
            }
        });
        dispatch(updateUser({token,userData:profileData.user}))             
    }
    

  return (
    <section className="flex flex-col w-full">
        <div className="">
            <button className="m-2 flex items-center text-primary-dark hover:text-pista-dark" 
            onClick={()=> navigate(-1)}>
                <MdKeyboardArrowLeft /> Back
            </button>
        </div>
        {          
            <div className="">
                <form onSubmit={saveProfile} className="bg-white rounded my-4 py-4 px-3"> 
                    <div className="input-group">
                        <label htmlFor="" className='col-span-4'>Avatar</label>
                        <div className="image-upload col-span-8 flex ">
                            <label htmlFor="" className="">
                                {   
                                    changeAvatar &&
                                    <div className="upload-blur">
                                        <ImSpinner8  className="upload-spinner loading-icon"/>
                                    </div>
                                }
                            </label>
                            <label htmlFor="changeAvatar" disabled={changeAvatar} className="text-primary cursor-pointer col-span-8 hover:text-pista-dark">
                                <span className="edit-avatar p-px ">
                                    {    
                                        userProfileToShow.avatarUrl ?
                                        <img className="w-20 h-20 rounded-full" src={profileData.user.avatarUrl}/>
                                        :
                                        <img src=''/>
                                    }
                                </span>
                                {
                                    changeAvatar ? "": "Change Image"
                                }
                            </label>
                            <input type="file" name="changeAvatar" id="changeAvatar"  className="hidden " onChange={updateAvatar} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="" className='col-span-4'>Email</label>
                        <span className="user-email col-span-8">{profileData.user.email}</span>
                    </div>

                    <div className="input-group">
                        <label htmlFor="" className='col-span-4'>Username</label>
                        <span className="user-email col-span-8">{profileData.user.username}</span>
                    </div>

                    <div className="input-group">
                        <label htmlFor="name" className='col-span-4'>Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter name" value={profileData.user.name} 
                        onChange={handleInputChange} required className='col-span-8'  />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="bio" className='col-span-4'>Bio</label>
                        <textarea type="text" name="bio" id="bio" className="text-sm col-span-8" placeholder="Enter bio" value={profileData.user.bio} onChange={handleInputChange} rows="3"></textarea>
                    </div>

                    <div className="input-group">
                        <label htmlFor="portfolio" className='col-span-4'>Portfolio</label>
                        <input type="text" name="portfolio" id="portfolio" placeholder="Enter portfolio" value={profileData.user.portfolio} 
                        onChange={handleInputChange} className='col-span-8' />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" disabled={profileData.isSubmitting}  className="flex items-center bg-primary p-1 rounded hover:bg-primary-dark">
                            {
                                profileStatus === 'Loading' ? 
                                <ImSpinner8 className="loading-icon mr-1" /> :
                                <MdSave className="mr-1" />
                            }
                            {
                                profileStatus === 'Loading' ? "Saving" : "Save"
                            }
                        </button>
                    </div>
                </form>
            </div>
        }
        {
            profileStatus === "Rejected" && 
            <p>something went wrong</p>
        }
    </section>
  )
}
