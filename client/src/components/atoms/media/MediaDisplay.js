import React, { useState } from 'react';

function MediaDisplay({ url }) {
  const [isVideo, setIsVideo] = useState(true);

  if (!url) return null;

  return (
   <div className="h-full w-full flex items-center  justify-center border border-white/20 rounded-3xl ">
      {isVideo ? (
        <video 
          controls 
          style={{ width: "100%", maxHeight: "400px" }}
          onError={() => setIsVideo(false)} 
          className="w-full h-full object-cover opacity-80 "
        >
          <source src={url} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      ) : (
        <img 
        src={url}
        alt=""
        className="w-full h-full object-cover opacity-80 "
        />
      )}
    </div>
  );
}

export default MediaDisplay;