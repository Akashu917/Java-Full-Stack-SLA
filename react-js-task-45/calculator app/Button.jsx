import './Button.css'

function Button({ label, onClick, className, colspan, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${className} ${isActive ? 'active' : ''}`}
      style={{ gridColumn: colspan ? `span ${colspan}` : 'span 1' }}
    >
      {label}
    </button>
  )
}

export default Button
