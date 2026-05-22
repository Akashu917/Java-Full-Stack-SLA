import React from "react";

import Navbar from "./Navbar";
import Card from "./Card";
import Button from "./Button";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        {/* Card Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="React"
            description="React makes UI development simple and component-based."
          />

          <Card
            title="Tailwind CSS"
            description="Utility-first CSS framework for rapid UI development."
          />

          <Card
            title="Reusable Components"
            description="Build scalable and maintainable applications."
          />
        </div>

        {/* Button Group */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <Button variant="primary">
            Save
          </Button>

          <Button variant="secondary">
            Cancel
          </Button>

          <Button variant="danger">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
