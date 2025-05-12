import React from "react";
import TimeAgo from "timeago-react";
import ReactPlayer from 'react-player'
import MediaDisplay from "../media/MediaDisplay";
// import ReactTimeAgo from 'react-time-ago'
// import TimeAgo from 'javascript-time-ago';
// import en from 'javascript-time-ago/locale/en.json';

// TimeAgo.addDefaultLocale(en);dfd

function GetMessage({ data }) {
  return (
    <div className="m-4">
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-accent">
          {data?.msg || ""}
          {data?.url&& <MediaDisplay url={data?.url} />}
          {/* {data?.url&& <img alt="" src={data?.url}/>}
          {data?.url && (
            <video controls>
              <source src={data?.url} type="video/mp4"  />
            </video>
          )} */}
        </div>

        <div className="chat-footer opacity-50 mt-1">
          {data?.timeStamp && <TimeAgo datetime={data?.timeStamp} />}
        </div>
      </div>
    </div>
  );
}

export default GetMessage;
