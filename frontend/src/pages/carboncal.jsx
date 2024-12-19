/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CarbonFootprintCalculator() {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [result, setResult] = useState('');
  const [showPackagingFeatures, setShowPackagingFeatures] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSubcategory('');
  };

  const calculateReduction = (weight, material, category) => {
    let reduction = 0;

    // Base reduction based on weight
    if (weight < 1) {
      reduction += 10;
    } else if (weight >= 1 && weight <= 5) {
      reduction += 15;
    } else {
      reduction += 20;
    }

    // Additional reduction based on material
    if (material.toLowerCase() === 'plastic') {
      reduction += 5;
    } else if (material.toLowerCase() === 'metal') {
      reduction += 10;
    } else if (material.toLowerCase() === 'biodegradable') {
      reduction += 15;
    }

    // Additional reduction based on category
    if (category === 'electronics') {
      reduction += 10;
    } else if (category === 'nonPerishable') {
      reduction += 5;
    } else if (category === 'accessoriesAndClothing') {
      reduction += 8;
    }

    return Math.min(reduction, 100); // Cap the reduction at 100%
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPackagingFeatures(false);

    const weight = parseFloat(event.target.productWeight.value);
    const material = event.target.productMaterial.value;
    const reduction = calculateReduction(weight, material, category);

    setResult(`We reduce the carbon footprint by ${reduction}%. Click below to learn more about our secure packaging!`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#000', color: '#fff' }}>
      {/* Left Section: Packaging Features Box */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#212121', color: '#fff', borderRadius: '8px', margin: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#FFC107' }}>Packaging Features and Their Impact</h2>
        {/* Packaging features content */}
        <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#212121",
          color: "#fff",
          borderRadius: "8px",
          margin: "20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#FFC107",
          }}
        >
          Packaging Features and Their Impact
        </h2> */}
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "#333",
              borderRadius: "8px",
              border: "1px solid #FFC107",
            }}
          >
            <strong>Recyclable Materials:</strong>
            <p>Ensures reusability and reduces waste generation.</p>
          </div>

          <div
            style={{
              padding: "15px",
              backgroundColor: "#333",
              borderRadius: "8px",
              border: "1px solid #FFC107",
            }}
          >
            <strong>Biodegradable Options:</strong>
            <p>Breaks down naturally, reducing environmental harm.</p>
          </div>

          <div
            style={{
              padding: "15px",
              backgroundColor: "#333",
              borderRadius: "8px",
              border: "1px solid #FFC107",
            }}
          >
            <strong>Reduced-Use Plastics:</strong>
            <p>Minimizes plastic usage to conserve resources.</p>
          </div>

          {/* New Boxes Added */}
          <div
            style={{
              padding: "15px",
              backgroundColor: "#333",
              borderRadius: "8px",
              border: "1px solid #FFC107",
            }}
          >
            <strong>Energy-Efficient Manufacturing:</strong>
            <p>
              Our manufacturing processes use renewable energy sources to reduce
              carbon emissions.
            </p>
          </div>

          <div
            style={{
              padding: "15px",
              backgroundColor: "#333",
              borderRadius: "8px",
              border: "1px solid #FFC107",
            }}
          >
            <strong>Eco-Friendly Inks and Dyes:</strong>
            <p>
              We use water-based inks and dyes to reduce environmental impact in
              packaging production.
            </p>
          </div>
        </div>
        <p>
          Our innovative approach helps protect the environment while ensuring
          the safe delivery of your parcels.
        </p>
      </div>
      </div>

      {/* Right Section: Form */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#212121', borderRadius: '8px', margin: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#FFC107' }}>Parcel Delivery Carbon Footprint Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input type="number" id="productWeight" name="productWeight" step="0.01" placeholder="Product Weight (kg)" required style={{ width: '100%', padding: '12px', border: '1px solid #FFC107', borderRadius: '4px', backgroundColor: '#333', color: '#fff' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <input type="text" id="productMaterial" name="productMaterial" placeholder="Material" required style={{ width: '100%', padding: '12px', border: '1px solid #FFC107', borderRadius: '4px', backgroundColor: '#333', color: '#fff' }} />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <select id="productCategory" name="productCategory" value={category} onChange={handleCategoryChange} required style={{ width: '100%', padding: '12px', border: '1px solid #FFC107', borderRadius: '4px', backgroundColor: '#333', color: '#fff' }}>
              <option value="" disabled>Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="nonPerishable">Non-Perishable</option>
              <option value="accessoriesAndClothing">Accessories and Clothing</option>
            </select>
          </div>

          {category && (
            <div style={{ marginBottom: '20px' }}>
              <select id="productSubcategory" name="productSubcategory" value={subcategory} onChange={(e) => setSubcategory(e.target.value)} required style={{ width: '100%', padding: '12px', border: '1px solid #FFC107', borderRadius: '4px', backgroundColor: '#333', color: '#fff' }}>
                {category === 'electronics' && (
                  <>
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                    <option value="other">Other Electronics</option>
                  </>
                )}
                {category === 'nonPerishable' && (
                  <>
                    <option value="cannedGoods">Canned Goods</option>
                    <option value="dryFood">Dry Food</option>
                    <option value="beverages">Beverages</option>
                  </>
                )}
                {category === 'accessoriesAndClothing' && (
                  <>
                    <option value="clothing">Clothing</option>
                    <option value="footwear">Footwear</option>
                    <option value="jewelry">Jewelry</option>
                  </>
                )}
              </select>
            </div>
          )}

          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#FFC107', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Submit</button>
        </form>

        {result && (
          <div style={{ marginTop: '20px', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#FFC107', padding: '12px', borderRadius: '4px', color: '#000' }}>
            {result}
            {!showPackagingFeatures && (
              <div>
                <Link to="/initiatives" style={{ color: '#000', textDecoration: 'underline', cursor: 'pointer' }}>Learn more</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CarbonFootprintCalculator;