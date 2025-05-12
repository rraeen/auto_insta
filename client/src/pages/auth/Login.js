import React from "react";
import FormWrapper from "../../components/organisms/FormWrapper";

import { loginUser } from "../../redux/reducers/userReducer";
import { loginProps } from "../../components/molecules/props";
import { useDispatch } from "react-redux";
import useNotification from "../../hooks/useNotification";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Center } from "../../components/atoms/Link/CenterBox";
import { centerBox } from "../../styles/atomStyle";
import { motion } from "framer-motion";
import GlassBorder from "./GlassBorder";
import FlipCard from "../../components/atoms/InputBox/FlipCard";
import { move } from "formik";

function Login() {
  const dis = useDispatch();
  const nav = useNavigate();
  const { setNotification } = useNotification();

  const onSubmit = async (v) => {
    try {
      const res = await dis(loginUser(v));
      if (res.payload.token) {
        setNotification("Login successful!", "success");
        nav("/dashboard");
      } else {
        setNotification("Login failed. Please try again.", "error");
      }
    } catch (err) {
      console.log(err);
      setNotification("Login failed. Please try again.", "error");
    }
  };



  return (
  <GlassBorder>
  
    <FormWrapper {...loginProps(onSubmit)} />


  </GlassBorder>
  
  );
}

export default Login;
