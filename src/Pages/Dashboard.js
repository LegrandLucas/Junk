import { Work } from '@material-ui/icons';
import React, { useState, useEffect} from 'react';
import Todoform from '../Components/Todoform'

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


  return (
    <div>
      <h2>Dashboard</h2>
      {/* <Todoform todos={todos} /> */}
    </div>
  );
}

export default Dashboard;
