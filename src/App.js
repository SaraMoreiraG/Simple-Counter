import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <div className='row text-white justify-content-center m-1' style={{ background: '#070707' }}>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          <div>
            <i class="fa-regular fa-clock"></i>
          </div>
        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>

        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>

        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>

        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>

        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>

        </div>
        <div className='col-sm-1 d-flex justify-content-center align-content-center border border-secondary rounded py-5 m-2' style={{ background: '#0d0d0d' }}>
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App;
