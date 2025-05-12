import React, { useState } from 'react';
import './Hamburger.css';
import { useDispatch, useSelector } from 'react-redux';
import { setbar } from '../../../redux/reducers/userReducer';

const Hamburger = ({color}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleToggle = () => {
    dispatch(setbar(!user?.barOpen)); 
  };
 

  return (
    <div className="hamburger" onClick={handleToggle}>
      <input 
        type="checkbox" 
        checked={!user?.barOpen} 
        onChange={handleToggle} 
        style={{ display: 'none' }}
      />
      <svg 
        viewBox="0 0 32 32" 
        style={{ 
          transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)', 
          transform: !user?.barOpen ? 'rotate(-45deg)' : 'none', 
          stroke:color,
        }}
      >
        <path
          className="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          style={{
            transition: 'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
            strokeDasharray: !user?.barOpen ? '20 300' : '12 63',
            strokeDashoffset: !user?.barOpen ? '-32.42' : '0',
            stroke:color,
          }}
        />
        <path
          className="line"
          d="M7 16 27 16"
          style={{
            stroke:color,
            transition: 'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </svg>
    </div>
  );
};

export default Hamburger;
