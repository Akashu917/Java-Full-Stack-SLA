import React, { useState } from "react";
import "./SignupForm.css";
import TextInput from "./TextInput";

function SignupForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Email validation
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    formData.email
  );

  // Form validation
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.password.trim() !== "" &&
    isEmailValid;

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setSubmittedData(formData);
  };

  // Clear form
  const handleClear = () => {
    setFormData(initialState);
    setSubmittedData(null);
  };

  return (
    <div className="container">
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <TextInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {!isEmailValid && formData.email && (
          <p className="error">Invalid email format</p>
        )}

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <div className="button-group">
          <button type="submit" disabled={!isFormValid}>
            Submit
          </button>

          <button
            type="button"
            className="clear-btn"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>

      {/* Preview Panel */}
      {submittedData && (
        <div className="preview">
          <h3>Submitted Data</h3>

          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>

          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>

          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default SignupForm;