import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let count = 0;

setInterval(function(){
  const six = Math.floor(count/100000);
  const five = Math.floor(count/10000);
  const four = Math.floor(count/1000);
  const three = Math.floor(count/100);
  const two = Math.floor(count/10);
  const one = Math.floor(count/1);

  count++;

  root.render(
    <React.StrictMode>
    <App
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
      digitFive={five}
      digitSixt={six}
      />
      </React.StrictMode>
  );
},1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
