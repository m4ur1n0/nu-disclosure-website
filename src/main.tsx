// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HomePage from './pages/HomePage';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <HomePage />
//   </React.StrictMode>
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import HomePage from './pages/HomePage';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <Router>
//       <HomePage />
//     </Router>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <React.StrictMode>

//       <App />

//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);