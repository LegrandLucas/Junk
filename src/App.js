import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/Pages/Dashboard';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NavbarButton from './Components/NavbarButton'
import useToken from './Components/useToken';

function App() {

  const [activeMenu, setActiveMenu] = useState(true)
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar activeMenu={activeMenu} />
        <NavbarButton activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Switch>
          <Route path="/dashboard">
            <Dashboard activeMenu={activeMenu}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
