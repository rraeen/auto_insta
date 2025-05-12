import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect } from "react";
import { useState } from "react";
import DashboardCard from "./../../components/atoms/cards/DashboardCard";
import { useTheme } from '@emotion/react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInstance } from "../../services/userServices/allServices.js";
import { setInstaInstanceId } from "../../redux/reducers/userReducer";
function DoctorDashboard() {
    const theme = useTheme()
    const nav=useNavigate()
    const dis=useDispatch()
    const instanceId = useSelector((state) => state.user.instaInstanceId);
    const pageTitle={
      "Automated Chat":"chat",
      "Comment Management":"comment",
      "LLM Integration":"llm",
      "Analytics":"analytics",
      "Promotions & Campaigns":"promotion"
    }


  const [cardDetails, setCardDetails] = useState([
    {
      title: "Automated Chat",
      discription:
        "Engage with your audience 24/7 using our AI-powered chat automation and never miss an opportunity again.",
    },
    {
      title: "Comment Management",
      discription:
        "Respond to comments instantly with personalized messages that keep your audience engaged and delighted.",
    },
    {
      title: "LLM Integration",
      discription:
        "Leverage cutting-edge AI language models to create truly intelligent and context-aware interactions with your followers.",
    },
    {
      title: "Analytics",
      discription:
        "Track engagement metrics and growth patterns with detailed analytics that help you optimize your Instagram strategy.",
    },
    {
      title: "Promotions & Campaigns",
      discription:
        "Automate your Instagram marketing by setting up scheduled posts, promotional messages, and targeted campaigns to increase engagement and conversions effortlessly",
    },
    {
      title: "System Configuration",
      discription:
        "Customize your AI assistant with tailored prompts, response styles, and automation settings to match your brand’s voice and communication strategy.",
    },
  ]);

  const handleCard=(o)=>{
    
    nav(`/dashboard/${instanceId?`${instanceId}/${pageTitle[o.title]}` :"config"}`)
  }

  useEffect(() => {
  const fetchInstance=async()=>{
    const res=await getInstance()
    if(res?.result?._id){
      dis(setInstaInstanceId(res.result._id))
    }
  }
  if(!instanceId){
    fetchInstance()
  }
    
  }, []);


  return (
    <Box
      sx={{
        height: "100vh",
        maxWidth: "100vw",
        overflow: "auto",
        paddingTop:"50px"

      }}
    >
      
      {/* <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}> */}
        <Grid container spacing={2} justifyContent={"center"} alignItems={"center"}>
          {cardDetails.map((o, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}  onClick={()=>handleCard(o)}>
              <DashboardCard title={o.title} description={o.discription}  />
            </Grid>
          ))}
          
        </Grid>
      </Box>
    // </Box>
  );
}

export default DoctorDashboard;
