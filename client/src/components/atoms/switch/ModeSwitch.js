import React from 'react'
import { setTheam } from '../../../redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

const ModeSwitch = () => {
    const dis = useDispatch();
    const { theam } = useSelector((state) => state.user);
 

  const handleToggle = () => {
    const newTheam=theam=='light'?"dark":"light"
    dis(setTheam(newTheam))
  }

  const switchStyles = {
    display: 'block',
    '--width-of-switch': '2.2em',
    '--height-of-switch': '1.2em',
    '--size-of-icon': '0.9em',
    '--slider-offset': '0.2em',
    position: 'relative',
    width: 'var(--width-of-switch)',
    height: 'var(--height-of-switch)',
  }

  const sliderStyles = {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.08',
    transition: '.4s',
    borderRadius: '30px',
  }

  const sliderBeforeStyles = {
    position: 'absolute',
    content: '""',
    height: 'var(--size-of-icon,1.4em)',
    width: 'var(--size-of-icon,1.4em)',
    borderRadius: '20px',
    left: 'var(--slider-offset,0.3em)',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'linear-gradient(40deg,#ff0080,#ff8c00 70%)',
    transition: '.4s',
  }

  const sliderCheckedStyles = {
    backgroundColor: '#303136',
  }

  const sliderBeforeCheckedStyles = {
    left:
      'calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)))',
    background: '#303136',
    boxShadow: 'inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb',
  }

  return (
   
    <label style={switchStyles}>
      <input
        type="checkbox"
        style={{ display: 'none' }}
        checked={theam!='light'?true:false}
        onChange={handleToggle}
      />
      <span style={sliderStyles} />
      <span
        style={{ ...sliderStyles, ...(theam!='light' ? sliderCheckedStyles : {}) }}
      >
        <span
          style={{
            ...sliderBeforeStyles,
            ...(theam!='light' ? sliderBeforeCheckedStyles : {}),
          }}
        />
      </span>
    </label>
  )
}

export default ModeSwitch
