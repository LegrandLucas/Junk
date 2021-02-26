import { Work } from '@material-ui/icons';
import React, { useState, useEffect} from 'react';
import Todoform from '../Components/Todoform';
import Todolist from '../Components/Todolist';
import styled from 'styled-components';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [todoFormDisplay, setTodoformDisplay] = useState(false);

  useEffect(() => {
    setTodos([
      {
        uid: '01',
        statut: true,
        description: "Buy more doge coin.",
        deadline: "01-01-2021"

      },
      {
        uid: '02',
        statut: true,
        description: "Invade mars!",
        deadline: "01-01-2021"
      },
      {
        uid: '03',
        statut: false,
        description: "Buy 1.5 M Bitcoins",
        deadline: "01-01-2021"
      }
    ])
  }, []);


  const Dashboard = styled.div`
    /* position: fixed; */
    /* left: 270px; */
    /* top: 0; */
    height: 100vh;
    background-color: #F9FAFB;
      flex-grow: 1;
    /* width: calc(100% - 270px); */
  `

  const MenuBar = styled.div`
    background-color: white;
    padding: 10px;
    border: solid .5px white;
  `

  const TodoBtn = styled.button`
    padding: 10px;
    margin: 10px;
    border: white solid .5px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    background: rgba(236,90,180,1);
    /* background: linear-gradient(rgba(236,90,180,1) 0%, rgba(176,88,244,1) 50%, rgba(39,88,246,1) 100%); */
  `



  return (
    <Dashboard>
      <MenuBar>
        <h2>Dashboard</h2>
      </MenuBar>
      <TodoBtn onClick={() => setTodoformDisplay(!todoFormDisplay)}>Add todo</TodoBtn>
      {todoFormDisplay
        ? <Todoform todos={todos} />
        : ""
      }
      <Todolist todos={todos} />
    </Dashboard>
  );
}

export default Dashboard;
