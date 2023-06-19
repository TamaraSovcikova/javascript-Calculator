import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import * as math from 'mathjs';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [historyValue, setHistoryValue] = useState('0');

  const calculateResult = () => {
    try {
      const result = math.evaluate(historyValue);
      return result;
    } catch (error) {
      return 'Error';
    }
  };

const handleButtonClick = (event) => {
  const buttonValue = event.target.id;
  const lastIndex = historyValue.length - 1;

  if (buttonValue === 'clear') {
    setHistoryValue('0');
    setDisplayValue('0');
  } else if (buttonValue === 'equals') {
    const result = calculateResult();
    setDisplayValue(result);
    setHistoryValue(result);
  } else if (buttonValue === 'backspace') {
    setHistoryValue((prevHistoryValue) => {
      if (prevHistoryValue.length === 1) {
        setDisplayValue('0');
        return '0';
      } else {
        const newDisplayValue = prevHistoryValue.slice(0, -1);
        setDisplayValue(newDisplayValue);
        return newDisplayValue;
      }
    });
  } else if (
    buttonValue === '*' ||
    buttonValue === '/' ||
    buttonValue === '-' ||
    buttonValue === '+' ||
    buttonValue === '%'
  ) {
    setHistoryValue((prevHistoryValue) => {
      const lastChar = prevHistoryValue[lastIndex];
      if (
        lastChar === '*' ||
        lastChar === '/' ||
        lastChar === '-' ||
        lastChar === '+' ||
        lastChar === '%'
      ) {
        return prevHistoryValue.slice(0, lastIndex) + buttonValue;
      } else {
        return prevHistoryValue + buttonValue;
      }
    });
    setDisplayValue(''); // Clear the display for the second number
  } else if (buttonValue === '.') {
    setHistoryValue((prevDisplayValue) => {
      const lastChar = prevDisplayValue.slice(-1);
      if (
        lastChar === '*' ||
        lastChar === '/' ||
        lastChar === '-' ||
        lastChar === '+' ||
        lastChar === '%' ||
        lastChar === '.'
      ) {
        return prevDisplayValue;
      } else if (prevDisplayValue.includes('.') === false) {
        return prevDisplayValue + '.';
      } else {
        return prevDisplayValue;
      }
    });
    setDisplayValue((prevDisplayValue) => {
      if (prevDisplayValue.includes('.') === false) {
        return prevDisplayValue + '.';
      } else {
        return prevDisplayValue;
      }
    });
  } else {
    setHistoryValue((prevDisplayValue) => {
      if (
        prevDisplayValue === '0' ||
        prevDisplayValue === 'Error' ||
        (prevDisplayValue[lastIndex] === '0' && buttonValue === '0')
      ) {
        return buttonValue;
      } else if (
        prevDisplayValue[lastIndex] === '*' ||
        prevDisplayValue[lastIndex] === '/' ||
        prevDisplayValue[lastIndex] === '-' ||
        prevDisplayValue[lastIndex] === '+'
      ) {
        return prevDisplayValue + buttonValue;
      } else {
        return prevDisplayValue + buttonValue;
      }
    });
    setDisplayValue((prevDisplayValue) => {
      if (
        prevDisplayValue === '0' ||
        prevDisplayValue === 'Error' ||
        (prevDisplayValue[lastIndex] === '*' ||
          prevDisplayValue[lastIndex] === '/' ||
          prevDisplayValue[lastIndex] === '-' ||
          prevDisplayValue[lastIndex] === '+')
      ) {
        return buttonValue;
      } else {
        return prevDisplayValue + buttonValue;
      }
    });
  }
};












  return (
    <div className="App">
      <div className="container">
        <div className="calculator">
          <div className="row mb-3">
            <input
              type="text"
              className="form-control form-display form-control-sm custom-input"
              value={historyValue}
              disabled
            />
          </div>
          <div className="row mb-3">
            <input
              id="display"
              type="text"
              className="form form-control custom-input"
              value={displayValue}
              disabled
            />
            <div className="box-shadow"></div>
            <div className="box-shadow"></div>
          </div>
          <div className="row">
            <div className="col">
              <button
                id="clear"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                C
              </button>
              <button
                id="7"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                7
              </button>
              <button
                id="4"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                4
              </button>
              <button
                id="1"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                1
              </button>
              <button
                id="%"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                %
              </button>
            </div>
            <div className="col">
              <button
                id="/"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                /
              </button>
              <button
                id="8"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                8
              </button>
              <button
                id="5"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                5
              </button>
              <button
                id="2"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                2
              </button>
              <button
                id="0"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                0
              </button>
            </div>
            <div className="col">
              <button
                id="*"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                *
              </button>
              <button
                id="9"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                9
              </button>
              <button
                id="6"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                6
              </button>
              <button
                id="3"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                3
              </button>
              <button
                id="."
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                .
              </button>
            </div>
            <div className="col d-flex flex-column">
              <button
                id="backspace"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                <i className="fas fa-backspace backspace"></i>
              </button>
              <button
                id="-"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                -
              </button>
              <button
                id="+"
                className="btn btn-block square-button custom-button"
                onClick={handleButtonClick}
              >
                +
              </button>
              <button
                id="equals"
                className="btn btn-block square-button equals-button custom-button"
                style={{ flex: '2' }}
                onClick={handleButtonClick}
              >
                =
              </button>
            </div>
          </div>
        </div>
        <footer>
          <p>
            Coded by
            <br />
            Tamara Sovcikova
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
