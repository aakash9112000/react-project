// components/ErrorMessage.js
import React from 'react';
import './ErrorMessage.css'; // Ensure this path matches your file structure

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message-container">
      <div className="error-icon">⚠️</div>
      <div className="error-text">{message}</div>
    </div>
  );
};

export default ErrorMessage;
