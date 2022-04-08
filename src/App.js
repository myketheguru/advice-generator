import { useState, useEffect } from 'react'
import Dice from './images/icon-dice.svg'
import Pattern from './images/pattern-divider-desktop.svg'

function App() {

  const [advice, setAdvice] = useState({})

  const getAdvice = async () => {
    let adviceSlip = await fetch('https://api.adviceslip.com/advice')
    return adviceSlip.json()
  }

  const showAdvice = () => {
    getAdvice().then(data => {
      setAdvice(data.slip)
    })
  }

  useEffect(() => {
    showAdvice()
  }, [])

  return (
    <div className="App">
      <div className="card">
        <p>Advice #{advice.id}</p>
        <h1>"{ advice.advice }"</h1>

        <img src={Pattern} className="pattern" alt="" />

        <button onClick={showAdvice}>
          <img src={Dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
