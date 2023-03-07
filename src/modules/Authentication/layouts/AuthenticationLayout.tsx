import { Outlet } from 'react-router-dom';
import SideComponent from '../components/SideComponent';

const AuthenticationLayout = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-2/5 h-full flex justify-center items-center">
        <Outlet />
      </div>
      <div className="flex-1 bg-slate-100 h-full">
        <SideComponent />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
