import React, { useState } from 'react';
import styled from 'styled-components'
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import lucasPhoto from '../Images/lucasPhoto.png'
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import AssignmentLateRoundedIcon from '@material-ui/icons/AssignmentLateRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';

const Navbar = () => {

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);


  const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
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
    color: grey;
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
    padding: 1px;
    /* background: rgb(236,90,180); */
    background: linear-gradient(90deg, rgba(236,90,180,1) 0%, rgba(176,88,244,1) 50%, rgba(39,88,246,1) 100%);
  `;

  const Todolist = styled.ul`
    margin: 0px;
    padding: 0px;
    margin: 40px 0px;
  `

  const ListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    color: white;

    > li {
      display: flex;
      align-items: center;

      > svg {
        opacity: 50%;
        margin-right: 10px;
      }
    }

    > p {
      background-color: grey;
      border-radius: 20px;
      font-size: .8rem;
      padding: 2px 5px;
      color: white;
    }
  `

  const Slider = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #212831;
    font-size: .8rem;
    cursor: pointer;
    align-content: center;
    text-align: center;
    width: auto;
    height: auto;
    border-radius: 20px;

    > #slider1, #slider2, #slider3 {
      padding: 15px 0px;
      margin: 0;
      align-self: center;
      border-radius: 20px;
    }

    > #slider1 {
      background-color: ${first ? '#29323E' : 'none'};
    }
    > #slider2 {
      background-color: ${second ? '#29323E' : 'none'};
    }
    > #slider3 {
      background-color: ${third ? '#29323E' : 'none'};
    }
`;

const sliderSelection = (props) => {
  console.log(props);
  if (props === 'slider1') {
    setFirst(true)
    setSecond(false)
    setThird(false)
  } else if (props === 'slider2') {
    setFirst(false)
    setSecond(true)
    setThird(false)
  } else {
    setFirst(false)
    setSecond(false)
    setThird(true)
  }
}

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
        <Todolist>
          <ListItem>
            <li><AssignmentRoundedIcon />All</li>
            <p>01</p>
          </ListItem>
          <ListItem>
            <li><AssignmentLateRoundedIcon />Doing</li>
            <p>01</p>
          </ListItem>
          <ListItem>
            <li><AssignmentTurnedInRoundedIcon />Done</li>
            <p>01</p>
          </ListItem>
        </Todolist>
        <Slider>
          <p id='slider1' onClick={() => sliderSelection('slider1')}>Projects</p>
          <p id='slider2' onClick={() => sliderSelection('slider2')}>Tags</p>
          <p id='slider3' onClick={() => sliderSelection('slider3')}>Filters</p>
        </Slider>
      </Navbar>

    </div>
  )
}

export default Navbar
