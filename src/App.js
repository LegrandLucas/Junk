import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/Pages/Dashboard';
import Dash from '../src/Pages/Dash';
import Login from './Components/Login';
import useToken from './Components/useToken';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dash">
            <Dash />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
