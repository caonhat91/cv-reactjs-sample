import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './app/app';
import reportWebVitals from './reportWebVitals';
import { ReactComponent as Line1 } from './assets/images/line-1.svg';
import { ReactComponent as Line2 } from './assets/images/line-2.svg';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Line2 className="line-bg" />
    <Line1 className="line-bg" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
