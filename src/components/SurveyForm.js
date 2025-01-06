import React, { useState } from "react";
import axios from "axios";
import "./SurveyForm.css";


const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
   
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
        const response = await axios.post('https://backend-ochre-one-61.vercel.app/api/surveys', formData);
        console.log('Survey submitted:', response.data);
        alert("Yay!!Your survey has been submitted")
    } catch (error) {
        console.error('Error submitting survey:', error);
    }
};

  return (
    <div className="container mt-5">
    
      <h1 className="text-center mb-4"><b>Form Survey</b></h1>

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <select
            name="gender"
            className="form-control"
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Country</label>
          <select
            name="nationality"
            className="form-control"
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
