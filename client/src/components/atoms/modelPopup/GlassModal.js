import React, { useState } from "react";
import { X } from "lucide-react";
import SwithcButton from "../Button/SwithcButton";
import DropDownInput from "../InputBox/DropDownInput";
import TextAreaInput from "../InputBox/TextAreaInput";
import { Typography } from "@mui/material";
import { GlassSwitch } from "../Button/GlassSwitch";
const toggleContainer = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 18,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
  zIndex: 2,
};

export const SettingsToggle = ({ onClick }) => (
  <button onClick={onClick}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  </button>
);

const GlassModal = ({
  title = "",
  children,
  isOpen,
  setIsOpen,
  handleSubmit
}) => {

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* <SettingsToggle onClick={openModal} /> */}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 mt-[50px]"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-[600px] backdrop-blur-lg bg-white/10 rounded-xl p-6 shadow-xl border border-white/30 transform transition-all duration-500"
            style={{
              animation: "modalFadeIn 0.5s ease-out forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              {title}
              <button
                onClick={closeModal}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </div>
            {/* {children?children:>} */}
            {children}
            <div className="flex justify-end space-x-3" onClick={handleSubmit}>
              <button
                size="small"
                className="px-4 py-2 rounded-lg bg-blue-500/70 hover:bg-blue-600/70 transition-colors text-white"
              >
                save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GlassModal;
