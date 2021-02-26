import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styled from 'styled-components'


const NavbarButton = (props) => {
  const NavBtn = styled.div`
    background-color: red;
    /* background-color: #1e1e1e; */
    color: white;
    position: fixed;
    top: 0;
    left: 270px;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
  `
  return (
    <NavBtn>
      <ArrowBackIosIcon onClick={() => props.setActiveMenu(!props.activeMenu)}/>
    </NavBtn>
  )
}

export default NavbarButton

