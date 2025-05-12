import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ChatSettings() {
    const instanceId = useSelector((state) => state.user.instaInstanceId);

   
  return (
    <div>
      This is chat setting page
    </div>
  )
}

export default ChatSettings
