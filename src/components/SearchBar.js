// SearchBar.js
import React from 'react';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ value, onChange, onSubmit }) => {
  const handleChange = (e) => {
    onChange(e); // Call the onChange function passed as a prop
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    onSubmit(); // Call the onSubmit function passed as a prop
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit} className="searchbar-form">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search for a city..."
          className="searchbar-input"
        />
        <button type="submit" className="searchbar-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
