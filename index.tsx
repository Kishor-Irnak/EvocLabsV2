<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // <- ading CSS url
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // <- ading CSS url
>>>>>>> 323b3986a57e5db70ed2dbd4da7d7f0b4189a577

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
