import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import OTPVerification from './OTPVerification';
// import Newevent from './Newevent';

const App = () => (
    <div className="App">


       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/otp/:name/:email" element={<OTPVerification/>} />
       </Routes>
       
    </div>
  );

  

export default App;

