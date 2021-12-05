import React from 'react';
import { render } from 'react-dom';
import App from './Container/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalState from './Context/GlobalState.jsx';

render( < BrowserRouter > <GlobalState>< App / ></GlobalState> < /BrowserRouter>  , document.getElementById('root'))