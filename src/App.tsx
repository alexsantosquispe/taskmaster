import { SideBarMenu } from './components/molecules/SideBarMenu/SideBarMenu';
import { Detail } from './components/organisms/Detail/Detail';

function App() {
  return (
    <div className="text-primary flex min-h-screen flex-col bg-white dark:bg-black dark:text-white">
      <main className="flex h-screen w-full flex-col gap-2 md:flex-row md:p-2">
        <SideBarMenu />
        <Detail />
      </main>
    </div>
  );
}

export default App;
