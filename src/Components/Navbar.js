import React from 'react';
import styled from 'styled-components'
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import lucasPhoto from '../Images/lucasPhoto.png'


const Navbar = () => {

  const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    padding: 10px;
  `

  const NavbarTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
  `
  const NavbarTopIcons = styled.div`
    display: flex;
    justify-items: space-between;
    > svg {
      margin: 0px 2px;
    }
  `

  const Profile = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    /* background: rgb(236,90,180); */
    /* background: linear-gradient(90deg, rgba(236,90,180,1) 0%, rgba(176,88,244,1) 50%, rgba(39,88,246,1) 100%); */
  `;


  return (
    <div>
      <Navbar>
        <NavbarTop>
          <Profile src={lucasPhoto}/>
          <NavbarTopIcons>
            <SearchRoundedIcon/>
            <RefreshRoundedIcon/>
            <NotificationsRoundedIcon/>
          </NavbarTopIcons>
        </NavbarTop>
      </Navbar>

    </div>
  )
}

export default Navbar
