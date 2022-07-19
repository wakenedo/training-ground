import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import ButtonJavaScript from './components/ButtonJavaScript'
import ButtonReact from './components/ButtonReact'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <BrowserRouter>
      <App />
      <ButtonJavaScript />
      <ButtonReact />
    </BrowserRouter>

  </>
);


