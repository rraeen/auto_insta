import React from 'react'
import { getConverstationUser } from '../../../redux/socketReducer'
import { useDispatch } from 'react-redux'

function Avtar({data, setUser, user, active=false}) {
  const dis = useDispatch()
  
  const handleConversation = () => {
    setUser(data)
    //  const val= await dis(getConverstationUser(id))
    //  console.log("val",val)
  }
  
  return (
    <div 
      onClick={handleConversation}  
      className={`flex justify-start items-center p-5 ${user&& user?.instaId==data?.instaId ? 'bg-slate-800' : ''} hover:bg-slate-400 duration-300 transition-colors w-full`}
    >
      <div className="avatar mr-2">
        <div className="ring-primary ring-offset-base-100 w-12 rounded-full">
          <img
            src={data?.profile_pic || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
            alt="User Avatar"
          />
        </div>
      </div>
      <div className="ml-1">
        <h1 className="h6">{data?.name || ""}</h1>
        <span>{data?.email || ""}</span>
      </div>
    </div>
  )
}

export default Avtar