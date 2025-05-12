import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GlassBorder from "../../../pages/auth/GlassBorder";

const motionprops = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 2, type: "spring", bounce: 0.5 },
};

function MotionCard({ cards, seleted, props = motionprops }) {
  return (
    <AnimatePresence mode="wait">
      {Object.keys(cards).map((o, i) => {
          return (
            <>
            {o == seleted && (
                <motion.div key={seleted} {...props}>
                <div className="form-container" style={{marginBottom:"10px"}}  >
                {cards[o]}
                </div>
              </motion.div>
            )}
            </>
        );
      })}
    </AnimatePresence>
  );
}

export default MotionCard;
