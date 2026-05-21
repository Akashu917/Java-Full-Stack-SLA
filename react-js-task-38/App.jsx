import React from "react";
import CounterReducer from "./CounterReducer";
import FocusInput from "./FocusInput";

function App() {
  return (
    <div style={{ padding: "20px" }}>

      <CounterReducer />

      <hr />

      <FocusInput />
    </div>
  );
}

export default App;
