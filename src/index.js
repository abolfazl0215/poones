import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './Container/style.scss';
import App from './Container/App.jsx';
import { BrowserRouter } from 'react-router-dom';

render( < BrowserRouter > < App / > < /BrowserRouter>  , document.getElementById('root'))