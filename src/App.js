import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Header from './Component/Header/Header';
import JavaContent from './Component/Content/Java/JavaContent';
import Java8Content from './Component/Content/Java8/Java8Content';
import SpringBootContent from './Component/Content/Springboot/SpringBootContent';
import MicroservicesContent from './Component/Content/Microservices/MicroservicesContent';
import DSAContent from './Component/Content/DSA/DSAContent';
import './App.css';
import Footer from './Component/Footer/Footer';
import HomePage from './Component/HomePage/HomePage';
import LeetCodeContent from './Component/Content/DSA/LeetCode/LeetCodeContent';

const App = () => {
  return (
    <div className='app-layout'> 
      <Router>
        <Header />
        <div className="allsites-content">
          <Routes>
            <Route path="/letslearn/java" element={<JavaContent />} />
            <Route path="/letslearn/java 8" element={<Java8Content />} />
            <Route path="/letslearn/spring boot" element={<SpringBootContent />} />
            <Route path="/letslearn/microservices" element={<MicroservicesContent />} />
            <Route path="/letslearn/dsa" element={<DSAContent />} />
            <Route path='/letslearn/dsa/leetcode' element={<LeetCodeContent />} />
            <Route path="/letslearn" element={<HomePage />} />
            <Route path="/" element={<Navigate to="/letslearn" />} /> {/* Default route */}

          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;