import { Detail } from './components/molecules/Detail/Detail';
import { SideBar } from './components/molecules/SideBar/SideBar';

function App() {
  return (
    <div className="text-primary flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-800 dark:text-white">
      <main className="flex h-screen gap-2 p-2">
        <SideBar />
        <Detail />
      </main>
    </div>
  );
}

export default App;
