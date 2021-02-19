import React, { useState } from 'react';
import styled from 'styled-components'
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import lucasPhoto from '../Images/lucasPhoto.png'
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import AssignmentLateRoundedIcon from '@material-ui/icons/AssignmentLateRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Navbar = () => {

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [allTodos, setAllTodos] = useState(true);
  const [doing, setDoing] = useState(false);
  const [done, setDone] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true)


  const Navbar = styled.div`
    /* display: flex; */
    display: ${ activeMenu
      ? `flex;`
      : `none;`
    };
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

  const HideBtn = styled.div`
    background-color: #1e1e1e;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
     /* left: ${ activeMenu
    ? `180px;`
      : `0px;`
    }; */
    padding: 10px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    transform: ${ activeMenu
      ? `translateX(500%);`
      : `translateX(0%);`
    };
  `
  // const HideBtnActive = styled.div`
  //   background-color: #1e1e1e;
  //   color: white;
  //   position: fixed;
  //   top: 0;
  //   left: 0px;
  //   padding: 10px;
  //   transform: translateX(0%);
  //   transition: transform 0.3s ease-in-out;
  // `

  const NavbarTop = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 5px;
  `
  const NavbarTopIcons = styled.div`
    display: flex;
    color: grey;
    justify-items: space-between;
    margin: 10px;
    > svg {
      margin: 0px 2px;
    }
  `

  const Profile = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    padding: 2px;
    background: linear-gradient(90deg, rgba(236,90,180,1) 0%, rgba(176,88,244,1) 50%, rgba(39,88,246,1) 100%);
  `;

  const Todolist = styled.ul`
    margin: 0px;
    padding: 0px;
    margin: 40px 0px;

    >li {
      display: flex;
      align-content: center;
      justify-content: space-between;
      list-style-type: none;
      color: white;
      border-radius: 10px;
      padding: 0px 10px;

      > div {
        display: flex;
        align-items: center;

        > svg {
          opacity: 50%;
          margin-right: 10px;
        }
      }

      > p {
        background-color: #29323e;
        border-radius: 10px;
        font-size: .8rem;
        padding: 2px 5px;
        color: white;
      }
    }



    #allTodos {
      background: ${allTodos
        ?'linear-gradient(90deg, rgba(236,90,180,1) 0%, rgba(176,88,244,1) 50%, rgba(39,88,246,1) 100%)'
        : 'none'
      };
      font-weight:  ${allTodos ? 'bold' : 'none'};
  }
    #doing {
    background: ${doing
      ? 'linear-gradient(90deg, rgba(236,90,180,1) 0%, rgba(176,88,244,1) 50%, rgba(39,88,246,1) 100%)'
      : 'none'
    };
      font-weight:  ${doing ? 'bold' : 'none'};
    }
    #done {
       background: ${done
      ? 'linear-gradient(90deg, rgba(236,90,180,1) 0%, rgba(176,88,244,1) 50%, rgba(39,88,246,1) 100%)'
      : 'none'
    };
      font-weight:  ${done ? 'bold' : 'none'};
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
        border-radius: 10px;

    > #slider1, #slider2, #slider3 {
      padding: 15px 0px;
      margin: 0;
      align-self: center;
          border-radius: 10px;
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

const todoSelection = (props) => {
  if (props === 'allTodos') {
    setAllTodos(true)
    setDoing(false)
    setDone(false)
  } else if (props === 'doing') {
    setAllTodos(false)
    setDoing(true)
    setDone(false)
  } else {
    setAllTodos(false)
    setDoing(false)
    setDone(true)
  }
}
const sliderSelection = (props) => {
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

      <>
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
              <li id='allTodos' onClick={() => todoSelection('allTodos')}>
                <div><AssignmentRoundedIcon />All</div>
                <p>01</p>
              </li>
              <li id='doing' onClick={() => todoSelection('doing')}>
                <div><AssignmentLateRoundedIcon />Doing</div>
                <p>01</p>
              </li>
              <li id='done' onClick={() => todoSelection('done')}>
                <div><AssignmentTurnedInRoundedIcon />Done</div>
                <p>01</p>
              </li>
            </Todolist>
            <Slider>
              <p id='slider1' onClick={() => sliderSelection('slider1')}>Projects</p>
              <p id='slider2' onClick={() => sliderSelection('slider2')}>Tags</p>
              <p id='slider3' onClick={() => sliderSelection('slider3')}>Filters</p>
            </Slider>
          </Navbar>
        <HideBtn expanded={activeMenu}>
          {activeMenu
            ? <ArrowForwardIosIcon onClick={() => setActiveMenu(!activeMenu)} />
            : <ArrowBackIosIcon onClick={() => setActiveMenu(!activeMenu)} />
          }
          </HideBtn>
        </>

  )
}

export default Navbar
