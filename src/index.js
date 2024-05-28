import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { ProfileDetailProvider } from './contexts/ProfileDetailContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CurrentUserProvider>
        <ProfileDetailProvider>
          <App />
        </ProfileDetailProvider>
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
