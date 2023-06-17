import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="calculator">
          <div className="row mb-3">
            <input
              type="text"
              className="form-control form-control-sm custom-input"
              placeholder="0"
              disabled
            />
          </div>
          <div className="row mb-3">
            <input
              type="text"
              className="form-control form-control-lg custom-input"
              placeholder="0"
              disabled
            />
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
              <button className="btn btn-block square-button custom-button">←</button>
              <button className="btn btn-block square-button custom-button">-</button>
              <button className="btn btn-block square-button custom-button">+</button>
              <button className="btn btn-block square-button equals-button custom-button" style={{ flex: '2' }}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
