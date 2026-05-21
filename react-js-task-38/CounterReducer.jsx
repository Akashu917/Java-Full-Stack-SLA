import React, { useReducer, useEffect } from "react";
import { saveCount, loadCount } from "./utils/localStorage";

// Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

// Initial State from localStorage
const initialState = {
  count: loadCount(),
};

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save count whenever it changes
  useEffect(() => {
    saveCount(state.count);
  }, [state.count]);

  return (
    <div>
      <h2>Counter using useReducer</h2>

      <h3>Count: {state.count}</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <br />

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

        <br />


      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

      <br />
    </div>
  );
}

export default CounterReducer;