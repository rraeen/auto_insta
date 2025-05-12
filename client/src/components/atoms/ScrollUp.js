import React, { useEffect, useRef } from 'react'

function ScrollUp({ data, children }) {
  const containerRef = useRef(null);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    if (messagesEndRef.current && containerRef.current) {
      containerRef.current.scrollTop = messagesEndRef.current.offsetTop;
    }
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [data]);
  
  return (
    <div 
      ref={containerRef} 
      style={{ 
        overflow: 'auto',
       height:data?.length>0?"66vh":"78vh"
      }}
     
    >
      {children}
      <div ref={messagesEndRef} style={{ height: '1px', width: '100%' }} />
    </div>
  )
}

export default ScrollUp