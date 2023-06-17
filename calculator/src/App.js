import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="calculator">
          <div className="row mb-3">
            <input
              type="text"
              className="form-control form-display form-control-sm custom-input"
              value={'0'}              
              disabled
            />
          </div>
          <div className="row mb-3">
            <input
              type="text"
              className="form form-control custom-input"
              value={'0'}              
              disabled
            />
          <div className='box-shadow'></div>
          <div className='box-shadow'></div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-block square-button custom-button">C</button>
              <button className="btn btn-block square-button custom-button">7</button>
              <button className="btn btn-block square-button custom-button">4</button>
              <button className="btn btn-block square-button custom-button">1</button>
              <button className="btn btn-block square-button custom-button">%</button>
            </div>
            <div className="col">
              <button className="btn btn-block square-button custom-button">/</button>
              <button className="btn btn-block square-button custom-button">8</button>
              <button className="btn btn-block square-button custom-button">5</button>
              <button className="btn btn-block square-button custom-button">2</button>
              <button className="btn btn-block square-button custom-button">0</button>
            </div>
            <div className="col">
              <button className="btn btn-block square-button custom-button">*</button>
              <button className="btn btn-block square-button custom-button">9</button>
              <button className="btn btn-block square-button custom-button">6</button>
              <button className="btn btn-block square-button custom-button">3</button>
              <button className="btn btn-block square-button custom-button">.</button>
            </div>
            <div className="col d-flex flex-column">
              <button className="btn btn-block square-button custom-button">
                <i className="fas fa-backspace backspace"></i>
              </button>
              <button className="btn btn-block square-button custom-button">-</button>
              <button className="btn btn-block square-button custom-button">+</button>
              <button className="btn btn-block square-button equals-button custom-button" style={{ flex: '2' }}>
                =
              </button>
            </div>
          </div>
        </div>
        <footer>
          <p>Coded by<br />Tamara Sovcikova</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
