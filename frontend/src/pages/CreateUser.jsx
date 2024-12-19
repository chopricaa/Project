/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    age: "",
    country: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/admin/create-user", formData);
      alert("User created and email sent successfully!");
      console.log("Response:", response.data);

      // Reset form fields
      setFormData({
        fullname: "",
        email: "",
        age: "",
        country: "",
        address: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating user:", error);
      alert(`Error: ${error.response?.data?.message || "Server Error"}`);
    }
  };

  return (
    <div className="container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;