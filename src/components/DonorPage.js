import React, { useState } from 'react';

function DonorPage() {
  const [foodDetails, setFoodDetails] = useState({ type: '', quantity: '', urgency: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Donation submitted!');
  };

  return (
    <div className="donor-page">
      <h2>Donor Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Type:</label>
          <input
            type="text"
            name="type"
            value={foodDetails.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={foodDetails.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Urgency:</label>
          <select
            name="urgency"
            value={foodDetails.urgency}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
}

export default DonorPage;
