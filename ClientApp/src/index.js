import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';
import App from './App';

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <App />
)

