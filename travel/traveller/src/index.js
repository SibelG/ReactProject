import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-4two2p4yvgiimmwr.us.auth0.com"
    clientId="5QDj8uEZDyF38yqmg752xj313rymevk3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);