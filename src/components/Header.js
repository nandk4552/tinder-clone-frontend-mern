import React from 'react'
import PersonIcon from '@mui/icons-material/Person2';
import { IconButton } from '@mui/material';
import './Header.css'
import  ForumIcon  from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header_icon' />
      </IconButton>


      <img
        className='header_logo'
        src='https://ik.imagekit.io/fhe9c5aen/tinder-clone/tinder_gXavqqEis.png?updatedAt=1680959759520'
        alt=''
      />
      <IconButton>
        <ForumIcon fontSize='large' className='header_icon' />
      </IconButton>

    </div>
  )
}

export default Header
