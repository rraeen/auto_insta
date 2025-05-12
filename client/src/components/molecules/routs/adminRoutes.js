import ConfigPage from "../../../pages/admin/Insta/ConfigPage";
import PostSettings from "../../../pages/admin/Insta/PostSettings";
import ChatSettings from "../../../pages/chatSettings/ChatSettings";
import DoctorAppointment from "../../../pages/doctor/DoctorAppointment";
import DoctorDashboard from "../../../pages/doctor/DoctorDashboard";
import DoctorInvoice from "../../../pages/doctor/DoctorInvoice";
import DoctorPatientList from "../../../pages/doctor/DoctorPatientList";
import DoctorSupport from "../../../pages/doctor/DoctorSupport";
import DoctorVideoConsulting from "../../../pages/doctor/DoctorVideoConsulting";
import ZeroLoign from "../../../pages/doctor/ZeroLoign";
import PatientDashboard from "../../../pages/patient/PatientDashboard";

const doctorRoutObject = [
  {
    element: (
      <>
        <DoctorDashboard />
      </>
    ),
    path: "/*",
  },
  {
    path: "/:id",
    // element: <ChatSettings />, // Parent component
    children: [
      { path: "chat", element:  <DoctorSupport /> },
      { path: "comment", element:  <PostSettings /> },
      { path: "llm", element: <ZeroLoign/> },
      { path: "history", element: <ChatSettings />},
      { path: "settings", element:  <ChatSettings /> }, 
    ],
  },
  {
    element: (
      <>
        <ConfigPage />
      </>
    ),
    path: "/config",
  },
  {
    element: (
      <>
        <DoctorAppointment />
      </>
    ),
    path: "/appointment",
  },
  {
    element: (
      <>
        <DoctorDashboard />
      </>
    ),
    path: "/dashboard",
  },
  {
    element: (
      <>
        <DoctorInvoice />
      </>
    ),
    path: "/invoice",
  },

  {
    element: (
      <>
        <DoctorPatientList />
      </>
    ),
    path: "/patient",
  },
  {
    element: (
      <>
        <DoctorSupport />
      </>
    ),
    path: "/help-support",
  },
  {
    element: (
      <>
        <DoctorVideoConsulting />
      </>
    ),
    path: "/video-consulting",
  },
];
const userRoutObject = [
  {
    element: (
      <>
         <DoctorDashboard />
      </>
    ),
    path: "/*",
  },
  {
    element: (
      <>
      <ConfigPage />
    </>
    ),
    path: "/:id/*",
  },
  {
    element: (
      <>
        <ConfigPage />
      </>
    ),
    path: "/config",
  },
  {
    element: (
      <>
        <DoctorAppointment />
      </>
    ),
    path: "/appointment",
  },
  {
    element: (
      <>
        <DoctorDashboard />
      </>
    ),
    path: "/dashboard",
  },
  {
    element: (
      <>
        <DoctorInvoice />
      </>
    ),
    path: "/invoice",
  },
  {
    element: (
      <>
        <DoctorPatientList />
      </>
    ),
    path: "/patient",
  },
  {
    element: (
      <>
        <DoctorSupport />
      </>
    ),
    path: "/help-support",
  },
  {
    element: (
      <>
        <DoctorVideoConsulting />
      </>
    ),
    path: "/video-consulting",
  },
];

export { doctorRoutObject, userRoutObject };
