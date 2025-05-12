import { useRoutes } from "react-router-dom";
import {doctorRoutObject, userRoutObject} from "./adminRoutes";

export const DoctorRoutes = () => {
    return  useRoutes([...doctorRoutObject]);
    
  };
export const UsersRoutes = () => {
    return  useRoutes([...doctorRoutObject]);
    
  };


  