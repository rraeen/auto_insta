import React, { useEffect, useState } from "react";
import "./index.css"; // Ensure this CSS file exists
import Login from "../../../pages/auth/Login";
import Signup from "../../../pages/auth/Signup";
import ForgetPassword from "../../../pages/auth/ForgetPassword";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const FlipCard = () => {
  const { page } = useParams();
  const [currentPage, setCurrentPage] = useState(page);
  const { user } = useSelector((state) => state.user);
  const nav = useNavigate();

  useEffect(() => {
    if (user?.token ) {
      console.log(page)
      nav("/dashboard");
      return;
    }
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  }, [page]);

  if (!user?.token) {
    return (
      <div style={{ background: "#000" }}>
        <div className="flip-card-container">
          <div
            className={`flip-card-inner ${
              currentPage == "sign-up" || currentPage == "forget-password"
                ? "flipped"
                : ""
            }`}
          >
            <div className="flip-card-front">
              {currentPage === "login" && <Login />}
            </div>
            <div className="flip-card-back">
              {currentPage === "sign-up" && <Signup />}
              {currentPage === "forget-password" && <ForgetPassword />}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (user?.token) {
      nav("/dashboard");
      return;
    }
  }
};

export default FlipCard;
