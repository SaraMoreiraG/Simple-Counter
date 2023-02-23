import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import reportWebVitals from './reportWebVitals';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';
import {faStop} from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
let myInterval = setInterval(myTimer, 1000);
let count = 0;

function myTimer() {
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
      <div className='d-flex justify-content-center m-0 text-white'>
        <button type="button" className="btn btn-dark" onClick={play}>
          <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
        </button>
        <button type="button" className="btn btn-dark" onClick={pause}>
          <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
        </button>
        <button type="button" className="btn btn-dark" onClick={stop}>
          <FontAwesomeIcon icon={faStop}></FontAwesomeIcon>
        </button>
      </div>
    </React.StrictMode>
  );
}

/*setInterval(function(){
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
      <button type="button" className="btn btn-secondary" onClick={reset} id='reset'>Reset</button>
      <button type="button" className="btn btn-secondary" onClick={stop} id='reset'>Stop</button>
    </React.StrictMode>
  );
},1000);*/

function play() {
	myInterval = setInterval(myTimer, 1000);
}

function pause() {
  console.log('Deberia parar');
  clearInterval(myInterval);
}

function stop() {
  count = 0;
  clearInterval(myInterval);
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
      <div className='d-flex justify-content-center m-0 text-white'>
        <button type="button" className="btn btn-dark" onClick={play}>
          <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
        </button>
        <button type="button" className="btn btn-dark" onClick={pause}>
          <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
        </button>
        <button type="button" className="btn btn-dark" onClick={stop}>
          <FontAwesomeIcon icon={faStop}></FontAwesomeIcon>
        </button>
      </div>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
