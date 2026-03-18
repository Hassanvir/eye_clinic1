import AppointmentNavbar from '../components/AppointmentNavbar';
import { Outlet } from 'react-router-dom';
import Appointments from './Appointments';

const AppointmentLayout = () => {
  return (
    <>
      <AppointmentNavbar />
      <Outlet />
    </>
  );
};

export default AppointmentLayout;