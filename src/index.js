import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js";
import "./primevideo-global.css";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render( < Router > < App / > < /Router> , document.getElementById('root'));