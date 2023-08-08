import React, { useState } from 'react';
import './Hello.css';

const Hello = () => {
    const [inputName, setInputName] = useState('');
    const [submittedName, setSubmittedName] = useState('');
  
    const handleInputChange = (event) => {
      setInputName(event.target.value);
    };
  
    const handleSubmit = () => {
      setSubmittedName(inputName);
    };
  
    return (
      <div>
        <div className="hello-container">
          <p className="hello-text">Enter your name: {submittedName && `${submittedName}`}</p>
        </div>
        <div className="hello-container">
          <input
            type="text"
            value={inputName}
            onChange={handleInputChange}
            className="hello-input"
          />
          <button
            onClick={handleSubmit}
            className="hello-button"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default Hello;
  
