import './App.css';
import PropType from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-regular-svg-icons';

function App(props) {
  return (
    <div className="App">
      <div className='row text-white justify-content-center m-1' style={{ background: '#070707' }}>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          <div>
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
          </div>
        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          {props.digitSixt % 10}
        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          {props.digitFive % 10}
        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          {props.digitFour % 10}
        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          {props.digitThree % 10}
        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          {props.digitTwo % 10}
        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          {props.digitOne % 10}
        </div>
      </div>
    </div>
  );
}
App.propTypes = {
  digitSixt: PropType.number,
  digitFive: PropType.number,
  digitFour: PropType.number,
  digitThree: PropType.number,
  digitTwo: PropType.number,
  digitOne: PropType.number
}

export default App;
