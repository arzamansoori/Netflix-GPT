import React from 'react';
import { logo_url } from "../utils/images";
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const toggleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <div className='absolute mx-9 my-3 z-10 flex justify-between w-[-webkit-fill-available]'>
      <img src={logo_url} alt='Netflix logo' className='w-56'></img>
      {user && (<div className='flex items-center mb-5'>
        <img src={user.photoURL} alt="User_img" className='w-7 h-7 mr-1'></img>
      <button className='font-bold text-black' onClick={toggleSignOut}>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header