import React from 'react'
import GlassBorder from '../../../pages/auth/GlassBorder'
import { useTheme } from '@emotion/react'

const DefaultIcon=()=>( <svg
xmlns="http://www.w3.org/2000/svg"
style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
/>
</svg>)

function DashboardCard({icon=DefaultIcon,title,description}) {
    const theme = useTheme()
  return (
   <GlassBorder sx={{maxWidth:"400px", cursor:"pointer"}}>
         <div
              style={{
                width: "3rem",
                height: "3rem",
                marginBottom: "1rem",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to bottom right, #ec4899, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
               
              }}
            >
             <DefaultIcon/>
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: theme.palette.text.primary,
              }}
            >
            {title}
            </h3>
            <p style={{ color: theme.palette.text.header}}>
             {description}
            </p>
      
    </GlassBorder>
  )
}

export default DashboardCard 