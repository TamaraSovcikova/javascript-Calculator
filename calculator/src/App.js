import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="calculator">
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control form-control-lg bg-secondary text-white border-0" placeholder="0" disabled />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="0" disabled />
            </div>
          </div>         
         <div className="row">
        <div className="col">
          <button className="btn btn-secondary btn-block">C</button>
          <button className="btn btn-primary btn-block">7</button>
          <button className="btn btn-primary btn-block">4</button>
          <button className="btn btn-primary btn-block">1</button>
          <button className="btn btn-primary btn-block">0</button>
        </div>
        <div className="col">
          <button className="btn btn-danger btn-block">/</button>
          <button className="btn btn-primary btn-block">8</button>
          <button className="btn btn-primary btn-block">5</button>
          <button className="btn btn-primary btn-block">2</button>
          <button className="btn btn-primary btn-block">.</button>
        </div>
        <div className="col">
          <button className="btn btn-danger btn-block">*</button>
          <button className="btn btn-primary btn-block">9</button>
          <button className="btn btn-primary btn-block">6</button>
          <button className="btn btn-primary btn-block">3</button>
          <button className="btn btn-primary btn-block">%</button>
        </div>
        <div className="col d-flex flex-column">
          <button className="btn btn-danger btn-block">←</button>
          <button className="btn btn-danger btn-block">-</button>
          <button className="btn btn-danger btn-block">+</button>
          <button className="btn btn-info btn-block equal-button" style={{ flex: '2' }}>
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
