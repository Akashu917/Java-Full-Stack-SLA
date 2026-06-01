import './Display.css'

function Display({ value }) {
  return (
    <div className="display">
      <input
        type="text"
        value={value}
        readOnly
        className="display-input"
      />
    </div>
  )
}

export default Display
