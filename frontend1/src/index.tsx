import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use 'document.getElementById' with proper type checking
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  // This is a JSX component, so it doesn't need any type assertion
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance in your app (optional)
reportWebVitals();
