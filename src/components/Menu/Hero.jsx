import React from "react";
import "../Menu/Hero.css";

const Hero = () => {
  return (
    <div className="menu">
      <form className="menu-form">
        <label htmlFor="vendor">Vendor Name:</label>
        <select id="vendor" name="vendor" required>
          <option value="">Select Vendor</option>
          <option value="vendor1">Vendor 1</option>
          <option value="vendor2">Vendor 2</option>
          <option value="vendor3">Vendor 3</option>
        </select>

        <label htmlFor="product">Product List:</label>
        <select id="product" name="product" required>
          <option value="">Select Product</option>
          <option value="kirana">Kirana Shop</option>
          <option value="milk">Milk</option>
          <option value="vegetables">Vegetables</option>
          <option value="bakery">Bakery</option>
          <option value="egg">Egg</option>
          <option value="chicken">Chicken</option>
          <option value="gas">Gas</option>
          <option value="petrol">Petrol</option>
          <option value="electric-bill">Electric Bill</option>
          <option value="water">Water</option>
          <option value="medicine">Medicine</option>
        </select>

        <label htmlFor="date">Date, Month, Year:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" placeholder="Enter amount" required />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Hero;
