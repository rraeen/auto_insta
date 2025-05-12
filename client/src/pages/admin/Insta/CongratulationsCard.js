import React, { useState } from "react";
import { Box, CheckCircle, Copy } from "lucide-react";
import GlassBorder from "../../auth/GlassBorder";
import { justcenter } from "../../../styles/atomStyle";
import Grid from "@mui/material/Grid2";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setInstaInstanceId } from "../../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

const CongratulationsCard = ({ linkText }) => {
  const [copied, setCopied] = useState(false);
  const nav=useNavigate()
  const dis=useDispatch()

  const handleCopy = () => {
    navigator.clipboard.writeText(linkText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{display:"flex",justifyContent:"center", flexDirection:"column",alignItems:"center",
      gap: "20px",}}>
        <div style={{display:"flex",justifyContent:"flex-end",width:"100%",color:"#8888"}}>
          <IconButton onClick={()=>{
            nav("/dashboard")

          }
          }>
          <CloseIcon/>
          </IconButton>

        </div>


    <h1 className="text-4xl font-bold mt-8 mb-8 animate-pulse">
  {[
    { char: "C", color: "text-red-500" },
    { char: "o", color: "text-orange-500" },
    { char: "n", color: "text-yellow-500" },
    { char: "g", color: "text-green-500" },
    { char: "r", color: "text-blue-500" },
    { char: "a", color: "text-indigo-500" },
    { char: "t", color: "text-purple-500" },
    { char: "u", color: "text-pink-500" },
    { char: "l", color: "text-red-500" },
    { char: "a", color: "text-orange-500" },
    { char: "t", color: "text-yellow-500" },
    { char: "i", color: "text-green-500" },
    { char: "o", color: "text-blue-500" },
    { char: "n", color: "text-indigo-500" },
    { char: "s", color: "text-purple-500" },
    { char: "!", color: "text-pink-500" },
  ].map((item, index) => (
    <span key={index} className={item.color}>
      {item.char}
    </span>
  ))}
</h1>


      <p className="text-white text-xl mb-8">
        Successfully Created Automation Instance Link
      </p>
      
      <div>
        <GlassBorder>
          <Grid container justifyContent={"space-between"} alignItems={"center"}>
            <Grid Item>
              <span className="text-white overflow-hidden overflow-ellipsis ml-4">
                http://www.kiistbazar.com/automation/instance/{linkText}
              </span>
            </Grid>
            <Grid Item>
              <button
                onClick={handleCopy}
                className="ml-4 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              >
                {copied ? (
                  <CheckCircle size={20} className="text-green-500" />
                ) : (
                  <Copy size={20} className="text-white" />
                )}
              </button>
            </Grid>
          </Grid>
        </GlassBorder>
      </div>
        <div className="mt-2 text-sm " style={{marginBottom:"100px",color:"#888"}}>
        This URL serves as a direct gateway to your automation instance, allowing you to manage and monitor your settings seamlessly.
        </div>
    </div>
  );
};

export default CongratulationsCard;
