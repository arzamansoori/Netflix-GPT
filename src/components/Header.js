import React from 'react';
import { logo_url } from "../utils/images"

const Header = () => {
  return (
    <div className='absolute mx-20 my-7 z-10'>
      <img src={logo_url} alt='Netflix logo' className='w-56'></img>
    </div>
  )
}

export default Header