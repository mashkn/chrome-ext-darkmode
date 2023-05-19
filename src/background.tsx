import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <p>Hello extension!</p>
  </React.StrictMode>
);
