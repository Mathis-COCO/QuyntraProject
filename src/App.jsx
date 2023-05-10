/* eslint-disable indent */
import React from 'react';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import LoginRegister from './pages/LoginRegister.jsx';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/connexion' element={<LoginRegister />}/>
        </Routes>
      </Router>
  );
}

export default App;
