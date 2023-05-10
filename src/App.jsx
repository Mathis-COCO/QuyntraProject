/* eslint-disable indent */
import React from 'react';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import LoginRegister from './pages/LoginRegister.jsx';
import Login from './pages/subpages/Login.jsx';
import Register from './pages/subpages/Register.jsx';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/connexion' element={<LoginRegister />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
  );
}

export default App;
