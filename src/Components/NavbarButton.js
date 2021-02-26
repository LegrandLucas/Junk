import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styled, { css } from 'styled-components'

  const NavBtn = styled.div`
    cursor: pointer;
    background-color: #1e1e1e;
    color: white;
    position: fixed;
    top: 0;
    left: 270px;
    padding: 10px;
    transform: ${props => props.active ? 'translateX(0px)' : 'translateX(-270px)'};
    /* transition: transform .2s ease-out; */
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.0,0.0,0.2,1);
  `

const NavbarButton = ({ activeMenu, setActiveMenu }) => {

  return (
    <NavBtn active={activeMenu}>
      <ArrowBackIosIcon onClick={() => setActiveMenu(!activeMenu)}/>
    </NavBtn>
  )
}

export default NavbarButton

