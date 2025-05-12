import { useParams } from 'react-router-dom'
import { DoctorRoutes, UsersRoutes } from '../components/molecules/routs'
import AdminDashboard from '../pages/admin/AdminDashboard'
import HelperDashboard from '../pages/helper/HelperDashboard'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPath } from '../redux/reducers/userReducer'


export const sidebarOptions = {
  doctor: [
    { label: 'Dashboard', path: 'dashboard',name:"dashboard" },
    { label: 'Appointment', path: 'appointment',name:"appointment" },
    { label: 'Video Consulting', path: 'video-consulting',name:"videoconsulting" },
    { label: 'Patients', path: 'patient',name:"patient" },
    { label: 'Invoice', path: 'invoice',name:"invoice" },
    { label: 'Help & Support', path: 'help-support',name:"support" },
  ],
  admin: [
    { label: 'Dashboard', path: 'dashboard',name:"dashboard" },
    { label: 'User Management', path: 'user-management',name:"usermanagement" },
    { label: 'Settings', path: 'settings',name:"settings" },
    { label: 'Reports', path: 'reports',name:"reports" },
    { label: 'Help & Support', path: 'help-support',name:"support" },
  ],
  helper: [
    { label: 'Patient Records', path: 'patient-records',name:"patientrecords" },
    { label: 'Appointment', path: 'appointments',name:"appointment" },
    { label: 'Invoice', path: 'invoice',name:"invoice" },
    { label: 'Help & Support', path: 'help-support',name:"support" },
  ],
  user: [
    { label: 'Dashboard', path: 'dashboard',name:"dashboard" },
    { label: 'Automated Chat', path: 'appointments' ,name:"appointment"},
    { label: 'Comment Management', path: 'invoice' ,name:"invoice"},
    { label: 'LLM Integration', path: 'help-support',name:"support" },
    { label: 'Analytics', path: 'help-support',name:"support" },
    { label: 'Promotions & Campaigns', path: 'help-support',name:"support" },
    { label: 'System Configuration', path: 'help-support',name:"support" },
  ],
}

export const Layout = ({ role }) => {
  const dis=useDispatch()
  const param=useParams()
  const pathList=sidebarOptions?.[role]?.map(o=>o.path)
  useEffect(() => {
    if(pathList && role ){
      if(pathList?.includes(param["*"])){
       dis(setPath(param["*"]))
      }else {
       dis(setPath(pathList[0]))
      }
    }
   
  }, [param])
  

  const pages = {
    admin: <AdminDashboard />,
    doctor: <DoctorRoutes />,
    helper: <HelperDashboard />,
    user: <UsersRoutes />,
  }
  return pages[role]
}

