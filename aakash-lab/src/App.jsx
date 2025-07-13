import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FunctionalPage from './pages/FunctionalPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-page" element={<FunctionalPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
