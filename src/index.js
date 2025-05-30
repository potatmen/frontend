import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside StrictMode
root.render(
  <React.StrictMode>
    <App /> {/* The main application component */}
  </React.StrictMode>
);