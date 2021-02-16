import React from 'react';
// import styled from 'styled-components'
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import lucasPhoto from '../Images/lucasPhoto.png'

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={lucasPhoto} alt=''></img>
        <div>
          <SearchRoundedIcon/>
          <RefreshRoundedIcon/>
          <NotificationsRoundedIcon/>
        </div>

      </div>

    </div>
  )
}

export default Navbar
