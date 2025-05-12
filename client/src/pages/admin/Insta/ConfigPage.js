import { Box } from "@mui/material";
import React, { useState,useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import CardSwitcher from "./AnimationComponent";
import MotionCard from "../../../components/atoms/cards/MotionCard";
import PersonalDetails from "./PersonalDetails";
import SocialMediaForm from "./SocialMediaForm";
import CongratulationsCard from "./CongratulationsCard";

function ConfigPage() {
  const [card, setCard] = useState("card1");
  const [instanceId, setInstanceId] = useState(null);
  const cards = {
    card1: <SocialMediaForm setCard={setCard} setInstanceId={setInstanceId}/>,
   card2: <CongratulationsCard linkText={instanceId}/>,
  };
  useEffect(()=>{
    if(instanceId){
      setCard("card2")
    }

  },[instanceId])
  
  return (
    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",width:"100%"}}>
    <Box
      sx={{
        width: "60%",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
          {/* <h1 className="form-title">Personal Details</h1> */}
      <MotionCard cards={cards} seleted={card} />
      
    </Box>
      </Box>

    // </Box>
  );
}

export default ConfigPage;
