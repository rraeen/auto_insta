import React, { useState } from "react";
import "./GradientDarkForm.css";
import { styled } from "@mui/system";
import { Paper } from "@mui/material";

const formFields = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  companyName: "",
  instaId: "",
  facebookId: "",
  instaToken: "",
  termsAccepted: false,
};


const PersonalDetails = ({ setCard}) => {
  const [formData, setFormData] = useState(structuredClone(formFields));



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCard(o=>{
        if(o=="card2"){
            return "card1"
        }
        return "card2"
    })
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <div
              className="form-group"
              style={{ width: "50%", marginRight: "10px" }}
            >
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group" style={{ width: "50%" }}>
              <label htmlFor="name">last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            //   required
            />
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default PersonalDetails;
