
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Pages/home/Navbar.jsx';
import Home from './Pages/home/HomeScreen/index.jsx';

function App() {
  return (
    <div className="App">
   <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
   </Router>
    </div>
  );
}

export default App;
