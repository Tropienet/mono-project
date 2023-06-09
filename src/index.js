import React from 'react';
import ReactDOM from 'react-dom/client';
import './Layouts/index.css';
import App from './Components/App';
import observableStore from './Stores/VehicleStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App observableStore={observableStore}/>
  </React.StrictMode>
);

