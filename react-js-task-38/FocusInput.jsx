import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Focus Input</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus"
      />

      <br />
      <br />

      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;