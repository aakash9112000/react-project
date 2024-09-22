import React, { useState, useEffect } from 'react';
import './Dropdown.css'; // Add your CSS file for styling

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, options]);

  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="Select city..."
        onClick={() => setIsOpen(!isOpen)}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      {isOpen && (
        <div className="dropdown-menu">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  onSelect(option);
                  setSearchQuery('');
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="dropdown-item">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
