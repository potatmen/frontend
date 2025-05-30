import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Home from './HomePage';

function App() {
  return (
    <Router> {/* Wrap the application in the Router */}
      <div className="App">
        <Routes> {/* Define routes for the application */}
          <Route path="/" element={<Home />} /> {/* Route for the home page */}
          <Route path="/login" element={<LoginForm />} /> {/* Route for the login page */}
          <Route path="/register" element={<RegisterForm />} /> {/* Route for the registration page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Export the App component