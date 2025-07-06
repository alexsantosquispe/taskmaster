import { Detail } from './components/molecules/Detail/Detail';
import { SideBarMenu } from './components/molecules/SideBarMenu/SideBarMenu';

function App() {
  return (
    <div className="text-primary dark:bg-primary flex min-h-screen flex-col bg-white dark:text-white">
      <main className="flex h-screen gap-2 p-2">
        <SideBarMenu />
        <Detail />
      </main>
    </div>
  );
}

export default App;
