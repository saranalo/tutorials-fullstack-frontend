import './App.css';
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [showError, setShowError] = useState(false);
  const [counterArray, setCounterArray] = useState([]);

  const increaseValue = () => {
    if(showError){
      setShowError(false);
    }
    setCounter(counter + 1);
    const newArray = [...counterArray];
    const findInArray = newArray.find(el => el === counter+1);
    if(!findInArray) newArray.push(counter+1)
    setCounterArray(newArray);
  }
  

  const decreaseValue = () => {
    if(counter === 0) {
      setShowError(true);
      return;
    }
    setCounter(counter - 1);
    const newArray = [...counterArray];
    if(!newArray.includes(counter-1)) newArray.push(counter-1);
    setCounterArray(newArray);
  }

  return (
    <div>
      <div style={{
        display: 'flex'
      }}>
        <button onClick={decreaseValue}>
          -
        </button>
        <p style={{ maxHeight: '5px', margin: 0}}>
          {counter}
        </p>
        <button onClick={increaseValue}>
          +
        </button>
      </div>
      {showError && (
        <div className='card-containter'>
          Value can not be lower than zero
        </div>
      )}
      {counterArray.map(el => <div>{el} is the number</div>)}
    </div>
  );
}

export default App;
