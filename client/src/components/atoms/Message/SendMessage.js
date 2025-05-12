import { Box } from '@mui/material'
import React from 'react'
import TimeAgo from 'timeago-react'
import DoneIcon from '@mui/icons-material/Done';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MediaDisplay from '../media/MediaDisplay';
// import ReactTimeAgo from './../../../../node_modules/react-time-ago/index.d';

function SendMessage({data}) {
  return (
    <Box sx={{mr:2}}>
    <div className="chat chat-end">
       {data?.url&& <MediaDisplay url={data?.url} />}
    <div className="chat-bubble chat-bubble-info">{data.msg||"I love you too!"}</div>
    
    <div className="chat-footer opacity-50 mt-1">{data.timeStamp ?<TimeAgo
      datetime={data.timeStamp}
    />:<MoreHorizIcon/>}</div>
  </div>
    </Box>
  )
}

export default SendMessage
