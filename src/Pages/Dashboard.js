import { Work } from '@material-ui/icons';
import React, { useState, useEffect} from 'react';
import Todoform from '../Components/Todoform';
import styled from 'styled-components';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([
      {
        title: "Buy more doge coin."
      },
      {
        title: "Invade mars!"
      }
    ])
  }, []);


  const Dashboard = styled.div`
    position: fixed;
    left: 270px;
    margin: 0px 20px;
    height: 100vh;
    width: 100%;
  `



  return (
    <Dashboard>
      <h2>Add TODO</h2>
      <Todoform todos={todos} />
    </Dashboard>
  );
}

export default Dashboard;
