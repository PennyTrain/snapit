import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { ProfileDetailProvider } from './contexts/ProfileDetailContext';

ReactDOM.render(
    <Router>
      <CurrentUserProvider>
        <ProfileDetailProvider>
          <App />
        </ProfileDetailProvider>
      </CurrentUserProvider>
    </Router>,
  document.getElementById('root')
);

reportWebVitals();
