import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0)
  const [answer, setAnswer] = useState('')
  const [guess, setGuess] = useState('')

  useEffect(() => {
    fizzNumber(number)
  }, [number])

  const handleInput = (event) => {
    event.preventDefault()
    setGuess(event.target.value)
  }

  const numberInc = () => {
    setNumber(number + 1)
  }

  const fizzNumber = (inputNumber) => {
    if (inputNumber === 0) {
      setAnswer(inputNumber);
    }
    else if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (inputNumber % 3 === 0) {
      setAnswer("fizz")
    } else if (inputNumber % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(inputNumber);
    }
  }

  return (
    <div className="App">
      <button value={number} onClick={numberInc}>Next Number</button>
      <h1>Number is now {number}</h1>
      <h2>FizzBuzz Number is {answer}</h2>
      <input type="text" onChange={handleInput}></input>
      <h3>
        {guess == answer ? <h1>Right</h1> : <h1>Wrong</h1>}
      </h3>
    </div>
  );
}

export default App;
