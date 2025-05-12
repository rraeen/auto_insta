

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MotionCard from "../../../components/atoms/cards/MotionCard";

const motionprops={
    key:"card1",
    initial:{ opacity: 0, x: 50 },
    animate:{ opacity: 1, x: 0 },
    exit:{ opacity: 0, x: -50 },
    transition:{ duration: 0.5, type: "spring", bounce: 0.4 }
}
const CardSwitcher=()=> {
  const [showFirstCard, setShowFirstCard] = useState(1);

  return (
    <>
  <MotionCard seleted={showFirstCard} cards={{
    1:<>Hello</>,
    2:<>Bye</>,
    3:<>See you</>,
    4:<>See you Soon</>,
  }}/>
  <button onClick={()=>setShowFirstCard(o=>o+1)}>next</button>
    </>
  );
}
export default CardSwitcher