import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import ButtonGrid from './components/ButtonGrid'

function App() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(String(num))
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.')
      setNewNumber(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const handleOperation = (op) => {
    const currentValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(result)
    }

    setOperation(op)
    setNewNumber(true)
  }

  const calculate = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current
      case '-':
        return prev - current
      case '*':
        return prev * current
      case '/':
        return prev / current
      case '%':
        return prev % current
      default:
        return current
    }
  }

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display)
      const result = calculate(previousValue, currentValue, operation)
      setDisplay(String(result))
      setPreviousValue(null)
      setOperation(null)
      setNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setNewNumber(true)
  }

  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay('0')
      setNewNumber(true)
    } else {
      setDisplay(display.slice(0, -1))
    }
  }

  const handleToggleSign = () => {
    const value = parseFloat(display)
    setDisplay(String(-value))
  }

  const handlePercentage = () => {
    const value = parseFloat(display)
    setDisplay(String(value / 100))
    setNewNumber(true)
  }

  return (
    <div className="app">
      <div className="calculator">
        <h1>Calculator</h1>
        <Display value={display} />
        <ButtonGrid
          onNumber={handleNumber}
          onDecimal={handleDecimal}
          onOperation={handleOperation}
          onEquals={handleEquals}
          onClear={handleClear}
          onBackspace={handleBackspace}
          onToggleSign={handleToggleSign}
          onPercentage={handlePercentage}
          currentOperation={operation}
        />
      </div>
    </div>
  )
}

export default App
