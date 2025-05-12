import React, { useState } from "react";
import "./GradientDarkForm.css";
import { Box, styled } from "@mui/system";
import { IconButton, Paper, Typography } from "@mui/material";
import { createInstaConfig } from "../../../services/userServices/allServices.js";
import useNotification from "../../../hooks/useNotification";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { setInstaInstanceId } from "../../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

const formFields = {
  companyName: "",
  instaId: "",
  facebookId: "",
  instaToken: "",
  termsAccepted: false,
};

const SocialMediaForm = ({ setCard, setInstanceId }) => {
  const [formData, setFormData] = useState(structuredClone(formFields));
  const { setNotification } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const nav=useNavigate()
  const dis=useDispatch()

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
    setIsLoading(true);
    const res = await createInstaConfig(formData);
    if (res.status) {
      setInstanceId(res.result._id);
      dis(setInstaInstanceId(res.result._id))
      setNotification(res?.message || "Registered successfully", "success");
      setIsLoading(false);
    } else {
      setNotification(res?.message || "failed", "error");
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: "100%" }}>
         <div style={{display:"flex",justifyContent:"flex-start",width:"100%",marginBottom:"-20px",}}>
          <Link to={"/dashboard"}>
            <Typography sx={{fontSize:"0.9rem",color:"#1e90ff"}}>
            <span className="arrow1">&larr;&nbsp;</span>

            </Typography>
          </Link>

        </div>
      <h1 className="form-title">Create Instance</h1>
      <div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="instaId">Instagram ID</label>
              <input
                type="text"
                id="instaId"
                name="instaId"
                value={formData.instaId}
                onChange={handleChange}
                required
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
                required
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
          </div>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {isLoading ? (
              <>
                <div class="three-body">
                  <div class="three-body__dot"></div>
                  <div class="three-body__dot"></div>
                  <div class="three-body__dot"></div>
                </div>
              </>
            ) : (
              <button
                className="next-button"
                style={{ marginRight: "5px" }}
                disabled={isLoading}
              >
                <>
                  Next
                  <span className="arrow">→</span>
                </>
              </button>
            )}
          </Box>
        </form>
      </div>
    </div>
  );
};

export default SocialMediaForm;
