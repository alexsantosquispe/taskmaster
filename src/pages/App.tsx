import { Outlet, useNavigate } from 'react-router-dom';

import { ToastStack } from '@/components/atoms/ToastStack/ToastStack';
import { SideBarMenu } from '@/components/molecules/SideBarMenu/SideBarMenu';
import { useEffect } from 'react';

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
          <section className="mt-[3.25rem] flex h-[calc(100dvh-3.25rem)] w-full justify-center pt-4 md:mt-0 md:h-full md:px-4 md:pb-0">
            <Outlet />
          </section>
          <ToastStack />
        </div>
      </main>
    </div>
  );
}

export default App;
