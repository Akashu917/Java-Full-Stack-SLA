import React, { useState } from "react";

function LivePreview() {
  const [text, setText] = useState("");

  return (
    <div className="p-5">
      <h2>Live Text Preview</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <h3>Preview:</h3>
      <p>{text}</p>
    </div>
  );
}

export default LivePreview;