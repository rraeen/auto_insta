import React, { useState } from "react";
import "./GradientDarkForm.css"; // We'll define this CSS below
import { createInstaConfig } from "../../../services/userServices/allServices";
import { Box, positions, styled } from "@mui/system";
import { Paper } from "@mui/material";
import { AnimatePresence, motion } from "motion/react"
const cards = ["Raunak", "Next Card", "Another Card"];

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
const GlassContainer = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)", // Glass effect
  backdropFilter: "blur(10px)", // Blurred background
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow
  borderRadius: "12px",
  padding: theme.spacing(4),
  color: "#ffffff",
  border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
}));

const RegistrationForm = ({ setCard}) => {
  const [formData, setFormData] = useState(structuredClone(formFields));
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

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
    // const res = await createInstaConfig(formData);
    // if (res) {
    //   setFormData(formFields);
    // }

    // Submit logic here
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <h1 className="form-title">Personal Details</h1>
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
          {/* <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div> */}

          {/* <div className="form-section">
          <h2>Social Media</h2>

          <div className="form-group">
            <label htmlFor="instaId">Instagram ID</label>
            <input
              type="text"
              id="instaId"
              name="instaId"
              value={formData.instaId}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="facebookId">Facebook ID</label>
            <input
              type="text"
              id="facebookId"
              name="facebookId"
              value={formData.facebookId}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="instaToken">Instagram Access Token</label>
            <input
              type="text"
              id="instaToken"
              name="instaToken"
              value={formData.instaToken}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">
            I agree to the{" "}
            <a href="#" className="gradient-text">
              Terms and Conditions
            </a>
          </label>
        </div> */}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <button className="next-button">
              Next
              <span className="arrow">→</span>
            </button>
          </Box>
        </form>
      </div>
      
    </div>
  );
};

export default RegistrationForm;
