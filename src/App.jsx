import { useState } from 'react'
import "./App.css"

function App() {
  const [panelOne, setPanelOne] = useState('0')
  const numberOne = (n) => {
    if(n === '.' && panelOne.includes('.')){
      //Do nothing
    }
    else if(panelOne.charAt(0) === '0' && n === '.'){
      setPanelOne(panelOne => panelOne + n)
    }
    else if(!panelOne.includes('.') && n === '.'){
      setPanelOne(panelOne => panelOne + n)
    }
    else if(panelOne.charAt(1) === '.' && n === 0){
      setPanelOne(panelOne => panelOne + n)
    }
    else if(panelOne.charAt(0) === '0' && panelOne.charAt(1) === '.'){
      setPanelOne(panelOne => panelOne + n)
    }
    else if(panelOne.charAt(0) === '0'){
      setPanelOne('' + n)
    }
    else{
      setPanelOne(panelOne => panelOne + n)
    }
  }
  const clearOne = () => setPanelOne('0')

  const [panelTwo, setPanelTwo] = useState('+')
  const signTwo = (n) => setPanelTwo(n)

  const [panelThree, setPanelThree] = useState('0')
  const numberThree = (n) => {
    if(n === '.' && panelThree.includes('.')){
      //Do nothing
    }
    else if(panelThree.charAt(0) === '0' && n === '.'){
      setPanelThree(panelThree => panelThree + n)
    }
    else if(!panelThree.includes('.') && n === '.'){
      setPanelThree(panelThree => panelThree + n)
    }
    else if(panelThree.charAt(1) === '.' && n === 0){
      setPanelThree(panelThree => panelThree + n)
    }
    else if(panelThree.charAt(0) === '0' && panelThree.charAt(1) === '.'){
      setPanelThree(panelThree => panelThree + n)
    }
    else if(panelThree.charAt(0) === '0'){
      setPanelThree('' + n)
    }
    else{
      setPanelThree(panelThree => panelThree + n)
    }
  }
  const clearThree = () => setPanelThree('0')

  const [panelFour, setPanelFour] = useState('0')
  const numberFour = () => {
      let result = 0
      if(panelTwo === '+'){
        result = parseFloat(panelOne) + parseFloat(panelThree)
      }
      else if(panelTwo === '-'){
        result = panelOne - panelThree
      }
      else if(panelTwo === '*'){
        result = panelOne * panelThree
      }
      else{
        result = panelOne / panelThree
      }
      setPanelFour(result)
  }

  return (
    <div className="calculator">
      <div className="panel" id="panelOne">
        <p>{panelOne}</p>
        <div className="numbers">
          <button onClick={() => numberOne(1)}>1</button>
          <button onClick={() => numberOne(2)}>2</button>
          <button onClick={() => numberOne(3)}>3</button>
          <button onClick={() => numberOne(4)}>4</button>
          <button onClick={() => numberOne(5)}>5</button>
          <button onClick={() => numberOne(6)}>6</button>
          <button onClick={() => numberOne(7)}>7</button>
          <button onClick={() => numberOne(8)}>8</button>
          <button onClick={() => numberOne(9)}>9</button>
          <button onClick={() => numberOne(0)}>0</button>
          <button onClick={() => numberOne('.')}>.</button>
          <button onClick={clearOne}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{panelTwo}</p>
        <div className="numbers">
          <button onClick={() => signTwo('+')}>+</button>
          <button onClick={() => signTwo('-')}>-</button>
          <button onClick={() => signTwo('*')}>*</button>
          <button onClick={() => signTwo('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{panelThree}</p>
        <div className="numbers">
          <button onClick={() => numberThree(1)}>1</button>
          <button onClick={() => numberThree(2)}>2</button>
          <button onClick={() => numberThree(3)}>3</button>
          <button onClick={() => numberThree(4)}>4</button>
          <button onClick={() => numberThree(5)}>5</button>
          <button onClick={() => numberThree(6)}>6</button>
          <button onClick={() => numberThree(7)}>7</button>
          <button onClick={() => numberThree(8)}>8</button>
          <button onClick={() => numberThree(9)}>9</button>
          <button onClick={() => numberThree(0)}>0</button>
          <button onClick={() => numberThree('.')}>.</button>
          <button onClick={clearThree}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{panelFour}</p>
        <div>
          <button onClick={numberFour}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
