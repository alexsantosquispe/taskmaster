import { Outlet, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { ToastStack } from './components/atoms/ToastStack/ToastStack';
import { SideBarMenu } from './components/molecules/SideBarMenu/SideBarMenu';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home/dashboard');
  }, []);

  return (
    <div className="text-primary flex min-h-screen flex-col bg-white dark:bg-black dark:text-white">
      <main className="flex h-screen w-full flex-col gap-2 md:flex-row md:p-2">
        <SideBarMenu />
        <div className="relative flex flex-1">
          <Outlet />
          <ToastStack />
        </div>
      </main>
    </div>
  );
}

export default App;
