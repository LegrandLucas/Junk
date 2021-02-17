import { Work } from '@material-ui/icons';
import React, { useState, useEffect} from 'react';
import Todoform from '../Components/Todoform';
import Todolist from '../Components/Todolist';
import styled from 'styled-components';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([
      {
        description: "Buy more doge coin.",
        deadline: "01-01-2021"

      },
      {
        description: "Invade mars!",
        deadline: "01-01-2021"
      }
    ])
  }, []);


  const Dashboard = styled.div`
    position: fixed;
    left: 270px;
    top: 0;
    height: 100vh;
    background-color: #F9FAFB;
    width: calc(100% - 270px);;
  `



  return (
    <Dashboard>
      <h2>Add TODO</h2>
      <Todoform todos={todos} />
      <Todolist todos={todos} />
    </Dashboard>
  );
}

export default Dashboard;
