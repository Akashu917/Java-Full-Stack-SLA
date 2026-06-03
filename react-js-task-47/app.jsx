import React from "react";
import Counter from "./counter";
import Todos from "./Todos";

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit Example</h1>

      <Counter />

      <hr />

      <Todos />
    </div>
  );
};

export default App;