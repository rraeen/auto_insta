import React, { useEffect, useState } from "react";
import { Avatar, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./homepage.css"; // Make sure to create this CSS file with the styles below
import Signup from "./../auth/Signup";
import { useSelector } from "react-redux";
const cards = ["Raunak", "Next Card", "Another Card"];

// Note: Make sure to install these dependencies:
// npm install framer-motion react-intersection-observer

const HomePage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStartClick = () => {
    navigate("/login");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#121212", // Dark background
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Glassmorphism Navbar */}
      <header
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 50,
          transition: "all 0.3s",
          backgroundColor: scrolled ? "rgba(18, 18, 18, 0.8)" : "transparent",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: scrolled ? "1px solid rgba(75, 75, 75, 0.3)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            padding: "1rem 1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              <span className="gradient-text">SocialSync</span>
            </motion.div>
            {!user?.token ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  type="primary"
                  onClick={() => navigate("/login")} // Define this function
                  style={{
                    color: "#fff",
                    padding: "4px 18px",
                    height: "auto",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    textTransform: "none", // Ensures normal text case
                    border: "none",
                  }}
                >
                  Login
                </Button>
                <Button
                  type="primary"
                  onClick={() => navigate("/sign-up")}
                  style={{
                    background: "linear-gradient(to right, #ec4899, #3b82f6)",
                    color: "#fff",
                    padding: "4px 18px",
                    height: "auto",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    textTransform: "none", // Ensures normal text case
                    border: "none",
                  }}
                >
                  Sign up
                </Button>
              </motion.div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography className="gradient-text">Hi</Typography>
                <Typography mx={1}>{user?.username} &nbsp;!</Typography>
                {/* <IconButton sx={{ p: 0 }}>
                  <Avatar sx={{ bgcolor: "#402fb5",height:"30px",width:"30px" }}>
                    {user?.username?.split("")[0]?.toUpperCase()}
                  </Avatar>
                </IconButton> */}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Elements */}
      <div
        style={{
          position: "relative",
          paddingTop: "12rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Background Gradient Effects */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: "16rem",
            height: "16rem",
            backgroundColor: "rgba(236, 72, 153, 0.2)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "8rem",
            right: "25%",
            width: "20rem",
            height: "20rem",
            backgroundColor: "rgba(59, 130, 246, 0.2)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        ></div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="gradient-text"
              style={{
                fontSize: "3.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Transform Your Instagram Marketing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: "1.25rem",
                marginBottom: "2.5rem",
                color: "#d1d5db",
                maxWidth: "48rem",
                margin: "0 auto 2.5rem auto",
              }}
            >
              Automate your responses, engage your audience, and grow your
              following with our AI-powered marketing platform.
            </motion.p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="primary"
                  size="large"
                  onClick={handleStartClick}
                  className="gradient-button"
                  style={{
                    padding: "0.5rem 1rem",
                    color: "#000 !important",
                    height: "auto",
                    fontSize: "1.125rem",
                    //   fontWeight: "bold",
                    borderRadius: "9999px",
                    textTransform: "none",
                    boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
                  }}
                >
                  Start for free
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="primary"
                  size="large"
                  onClick={handleStartClick}
                  // className="gradient-button"
                  style={{
                    marginLeft: "5px",
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    height: "auto",
                    fontSize: "1.125rem",
                    //   fontWeight: "bold",
                    borderRadius: "9999px",
                    textTransform: "none",
                    background: "#2a292a",
                  }}
                >
                  Watch video
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Card Animation */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
        }}
      >
        <motion.h2
          variants={fadeInUp}
          className="gradient-text"
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          Powerful Features for Instagram Growth
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          <motion.div
            variants={fadeInUp}
            className="feature-card"
            whileHover={{ y: -10 }}
            style={{
              backgroundColor: "rgba(31, 41, 55, 0.6)",
              backdropFilter: "blur(5px)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              border: "1px solid #374151",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                marginBottom: "1rem",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to bottom right, #ec4899, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Automated Chat
            </h3>
            <p style={{ color: "#d1d5db" }}>
              Engage with your audience 24/7 using our AI-powered chat
              automation and never miss an opportunity again.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="feature-card"
            whileHover={{ y: -10 }}
            style={{
              backgroundColor: "rgba(31, 41, 55, 0.6)",
              backdropFilter: "blur(5px)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              border: "1px solid #374151",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                marginBottom: "1rem",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to bottom right, #3b82f6, #ec4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Comment Management
            </h3>
            <p style={{ color: "#d1d5db" }}>
              Respond to comments instantly with personalized messages that keep
              your audience engaged and delighted.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="feature-card"
            whileHover={{ y: -10 }}
            style={{
              backgroundColor: "rgba(31, 41, 55, 0.6)",
              backdropFilter: "blur(5px)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              border: "1px solid #374151",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                marginBottom: "1rem",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to bottom right, #ec4899, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              LLM Integration
            </h3>
            <p style={{ color: "#d1d5db" }}>
              Leverage cutting-edge AI language models to create truly
              intelligent and context-aware interactions with your followers.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="feature-card"
            whileHover={{ y: -10 }}
            style={{
              backgroundColor: "rgba(31, 41, 55, 0.6)",
              backdropFilter: "blur(5px)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              border: "1px solid #374151",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                marginBottom: "1rem",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to bottom right, #3b82f6, #ec4899)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Analytics
            </h3>
            <p style={{ color: "#d1d5db" }}>
              Track engagement metrics and growth patterns with detailed
              analytics that help you optimize your Instagram strategy.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section with Floating Animation */}
      <div style={{ position: "relative", padding: "5rem 0" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: "64rem",
              margin: "0 auto",
              textAlign: "center",
              backgroundColor: "rgba(31, 41, 55, 0.4)",
              backdropFilter: "blur(16px)",
              padding: "3rem",
              borderRadius: "1rem",
              border: "1px solid #374151",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <h2
                className="gradient-text"
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                }}
              >
                Ready to transform your Instagram marketing?
              </h2>
            </motion.div>
            <p
              style={{
                fontSize: "1.25rem",
                marginBottom: "2rem",
                color: "#d1d5db",
              }}
            >
              Join thousands of creators who are growing their accounts with our
              AI-powered platform.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="primary"
                size="large"
                onClick={handleStartClick}
                className="gradient-button"
                style={{
                  background: "linear-gradient(to right, #ec4899, #3b82f6)",
                  border: "none",
                  color: "white",
                  padding: "1.5rem 2rem",
                  height: "auto",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  borderRadius: "9999px",
                  boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
                }}
              >
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "rgba(18, 18, 18, 0.8)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid #374151",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              "@media (min-width: 768px)": {
                flexDirection: "row",
              },
            }}
          >
            <p
              style={{
                color: "#9ca3af",
                marginBottom: "1rem",
                "@media (min-width: 768px)": {
                  marginBottom: 0,
                },
              }}
            >
              © {new Date().getFullYear()} InstaMarketing. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a
                href="#"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
              >
                Terms
              </a>
              <a
                href="#"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
              >
                Privacy
              </a>
              <a
                href="#"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
