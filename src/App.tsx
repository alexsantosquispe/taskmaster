import { AppRouter } from './AppRouter';
import { ToastStack } from './components/atoms/ToastStack/ToastStack';
import { SideBarMenu } from './components/molecules/SideBarMenu/SideBarMenu';

function App() {
  return (
    <div className="text-primary flex min-h-screen flex-col bg-white dark:bg-black dark:text-white">
      <main className="flex h-screen w-full flex-col gap-2 md:flex-row md:p-2">
        <SideBarMenu />
        <>
          <AppRouter />
          <ToastStack />
        </>
      </main>
    </div>
  );
}

export default App;
