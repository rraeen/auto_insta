import React, { useState } from "react";
import TimeAgo from "timeago-react";
import GlassModal, { SettingsToggle } from "../modelPopup/GlassModal";
import { GlassSwitch } from "../Button/GlassSwitch";
import DropDownInput from "../InputBox/DropDownInput";
import TextAreaInput from "../InputBox/TextAreaInput";
import GlassInput from "../InputBox/GlassInput";
import MediaDisplay from "../media/MediaDisplay";

const InstagramReelGlassCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
    const [botActive, setBotActive] = useState(true);
  

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center w-full h-[450px]">
      <div
        className={`relative w-80 h-full rounded-3xl overflow-hidden transition-all duration-500 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glass effect with border */}
        <div className="absolute inset-0 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl"></div>

        <div className="relative p-4 z-10 h-full">
          {/* Reel Container with adjusted aspect ratio */}
          <div className="flex justify-between items-center p-4">
            <TimeAgo datetime={data?.timestamp} />
            <SettingsToggle onClick={()=>setIsOpen(o=>!o)} />
          </div>
          <div className="aspect-[4/5] w-full bg-black/80  overflow-hidden mb-4 relative max-h-[400px] rounded-2xl">
            {/* <div className="h-full w-full bg-gradient-to-t from-purple-900/50 to-pink-600/50 flex items-center justify-center "> */}
            {data?.media_url&& <MediaDisplay url={data?.media_url} />}
              {/* <img
                src={data?.media_url}
                alt=""
                className="w-full h-full object-cover opacity-80 "
              /> */}
            {/* </div> */}

            {/* Play button */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div> */}
          </div>

          {/* Card footer */}
          {/* <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="text-white flex items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="ml-1 text-sm">24.5k</span>
            </div>
            <div className="text-white flex items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="ml-1 text-sm">1.2k</span>
            </div>
          </div>
          <div className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
        </div> */}
        </div>
      </div>

      <GlassModal title="Post Settings" isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
                 <div className="flex justify-end items-center">
                   <GlassSwitch
                     checked={botActive}
                     onChange={(e) => {
                       setBotActive(e.target.checked);
                     }}
                   />
                 </div>
                 <DropDownInput />
                 <GlassInput label="User Reply" placeholder="On user reply"/>
                 <TextAreaInput />
               </div>
      </GlassModal>
    </div>
  );
};

export default InstagramReelGlassCard;
