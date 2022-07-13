import React, { useState } from 'react'
import { Button, Wrapper, Title } from './styles'

const Calculator = () => {
  const [number, setNumber] = useState(0)
  const [oldNumber, setOldNumber] = useState(0)
  const [operator, setOperator] = useState()

  function inputNumber(e) {
    if (number === 0) {
      setNumber(e.target.value)
    } else {
      setNumber(number + e.target.value)
    }
  }

  function clearNumber(e) {
    setNumber(0)
  }

  function porcent() {
    setNumber(number / 100)
  }
  function changeValue() {
    if (number > 0) {
      setNumber(-number)
    } else {
      setNumber(Math.abs(number))
    }
  }

  function handlerOperator(e) {
    setOperator(e.target.value)
    setOldNumber(number)
    setNumber(0)
  }

  function calculate() {
    if (operator === '/') {
      setNumber(parseFloat(oldNumber) / parseFloat(number))
    } else if (operator === 'x') {
      setNumber(parseFloat(oldNumber) * parseFloat(number))
    } else if (operator === '-') {
      setNumber(parseFloat(oldNumber) - parseFloat(number))
    } else if (operator === '+') {
      setNumber(parseFloat(oldNumber) + parseFloat(number))
    }
  }
  return (
    <Wrapper>
      <Title>{number}</Title>
      <div>
        <Button onClick={clearNumber}>AC</Button>
        <Button onClick={changeValue}>+/-</Button>
        <Button onClick={porcent}>%</Button>
        <Button
          onClick={handlerOperator}
          value="/"
          style={{ backgroundColor: '#FF9500', color: 'white' }}
        >
          /
        </Button>
        <Button
          onClick={inputNumber}
          value={7}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          7
        </Button>
        <Button
          onClick={inputNumber}
          value={8}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          8
        </Button>
        <Button
          onClick={inputNumber}
          value={9}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          9
        </Button>
        <Button
          onClick={handlerOperator}
          value="x"
          style={{ backgroundColor: '#FF9500', color: 'white' }}
        >
          X
        </Button>
        <Button
          onClick={inputNumber}
          value={4}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          4
        </Button>
        <Button
          onClick={inputNumber}
          value={5}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          5
        </Button>
        <Button
          onClick={inputNumber}
          value={6}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          6
        </Button>
        <Button
          onClick={handlerOperator}
          value="-"
          style={{ backgroundColor: '#FF9500', color: 'white' }}
        >
          -
        </Button>
        <Button
          onClick={inputNumber}
          value={1}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          1
        </Button>
        <Button
          onClick={inputNumber}
          value={2}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          2
        </Button>
        <Button
          onClick={inputNumber}
          value={3}
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          3
        </Button>
        <Button
          onClick={handlerOperator}
          value="+"
          style={{ backgroundColor: '#FF9500', color: 'white' }}
        >
          +
        </Button>
        <Button
          onClick={inputNumber}
          value={0}
          style={{
            backgroundColor: '#505050',
            color: 'white',
            width: '6.4em',
            textAlign: 'left',
            paddingLeft: '1em'
          }}
        >
          0
        </Button>
        <Button
          onClick={inputNumber}
          value=","
          style={{ backgroundColor: '#505050', color: 'white' }}
        >
          ,
        </Button>
        <Button
          onClick={calculate}
          style={{ backgroundColor: '#FF9500', color: 'white' }}
        >
          =
        </Button>
      </div>
    </Wrapper>
  )
}

export default Calculator
