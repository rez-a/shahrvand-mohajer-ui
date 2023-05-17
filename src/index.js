import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { SWRConfig } from 'swr';
import * as serviceWorker from './serviceWorker';
import InstallPWA from 'utilities/InstallPWA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      <InstallPWA />
      <App />
    </SWRConfig>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
