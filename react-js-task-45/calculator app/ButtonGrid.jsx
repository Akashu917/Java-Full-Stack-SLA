import Button from './Button'
import './ButtonGrid.css'

function ButtonGrid({
  onNumber,
  onDecimal,
  onOperation,
  onEquals,
  onClear,
  onBackspace,
  onToggleSign,
  onPercentage,
  currentOperation
}) {
  const buttons = [
    { label: 'C', onClick: onClear, class: 'clear' },
    { label: '←', onClick: onBackspace, class: 'backspace' },
    { label: '%', onClick: onPercentage, class: 'percent' },
    { label: '÷', onClick: () => onOperation('/'), class: 'operation', isActive: currentOperation === '/' },
    
    { label: '7', onClick: () => onNumber(7), class: 'number' },
    { label: '8', onClick: () => onNumber(8), class: 'number' },
    { label: '9', onClick: () => onNumber(9), class: 'number' },
    { label: '×', onClick: () => onOperation('*'), class: 'operation', isActive: currentOperation === '*' },
    
    { label: '4', onClick: () => onNumber(4), class: 'number' },
    { label: '5', onClick: () => onNumber(5), class: 'number' },
    { label: '6', onClick: () => onNumber(6), class: 'number' },
    { label: '−', onClick: () => onOperation('-'), class: 'operation', isActive: currentOperation === '-' },
    
    { label: '1', onClick: () => onNumber(1), class: 'number' },
    { label: '2', onClick: () => onNumber(2), class: 'number' },
    { label: '3', onClick: () => onNumber(3), class: 'number' },
    { label: '+', onClick: () => onOperation('+'), class: 'operation', isActive: currentOperation === '+' },
    
    { label: '+/−', onClick: onToggleSign, class: 'toggle', colspan: 2 },
    { label: '0', onClick: () => onNumber(0), class: 'number', colspan: 1 },
    { label: '.', onClick: onDecimal, class: 'decimal' },
    { label: '=', onClick: onEquals, class: 'equals' },
  ]

  return (
    <div className="button-grid">
      {buttons.map((btn, index) => (
        <Button
          key={index}
          label={btn.label}
          onClick={btn.onClick}
          className={btn.class}
          colspan={btn.colspan}
          isActive={btn.isActive}
        />
      ))}
    </div>
  )
}

export default ButtonGrid
