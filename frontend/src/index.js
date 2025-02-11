import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This is optional, but usually for styling
import App from './App'; // This is your main app component
import reportWebVitals from './reportWebVitals'; // For measuring performance (optional)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // The 'root' div in index.html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
