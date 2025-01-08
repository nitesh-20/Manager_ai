import React, { useState } from 'react';
import Nav from '../Header/Nav'; // Import Navbar
import '../Menu/Hero.css'; // Include styles for Menu

const Hero = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="menu">
      {/* Navbar */}
      <Nav onSelectItem={handleSelectItem} />

      {/* Main Content */}
      <div className="main">
        <h3>Vendor: {selectedItem ? selectedItem : 'Select Item'}</h3>
        <div className="item-details">
          {selectedItem && <p>Details for {selectedItem} will go here.</p>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
