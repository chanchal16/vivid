import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import notfound from 'assets/errorpage.svg'

export const PageNotFound = () => {
    const navigate = useNavigate();
  return (
      <>
    <div className="text-gray w-full flex flex-col items-center justify-between my-12 py-8 ">
        <div className="flex flex-col items-center text-center m-auto">
            <img loading="lazy" src={notfound} alt="Page not found" className="w-56" />
            <h3 className="text-xl mt-4">Page not found!</h3>
        </div>
        <button className="border border-primary bg-light hover:bg-primary hover:text-white text-primary-dark px-6 py-2 mt-8 rounded-md" 
        onClick={() => navigate(-1)}>Go Back</button>
    </div></>
  )
}
