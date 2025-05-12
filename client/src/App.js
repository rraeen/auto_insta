import './App.css'
import Login from './pages/auth/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/auth/Signup'
import ForgetPassword from './pages/auth/ForgetPassword'
import useNotification from './hooks/useNotification'
import MainLayout from './components/organisms/Layout/MainLayout'
import { Box } from '@mui/material'
import { connectSocket } from './redux/socketReducer'
import { useDispatch } from 'react-redux'
import HomePage from './pages/home/HomePage'
import FlipCard from './components/atoms/InputBox/FlipCard'
import "./styles/style.css"
import BirthdayCard from './components/atoms/icons/BirthdayCard'

function App() {

  const { Notification } = useNotification()
 

  return (
    // <BirthdayCard/>
    // <HomePage/>
    <Box>
    
      {Notification}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/*" element={<MainLayout />} />
        <Route path="/:page" element={<FlipCard />} />
        {/* <Route path="/sign-up" element={<FlipCard />} />
        <Route path="/forget-password" element={<FlipCard />} /> */}
      </Routes>
    
    </Box>
  )
}

export default App
