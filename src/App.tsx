import { Detail } from './components/molecules/Detail/Detail';
import { SideBar } from './components/molecules/SideBar/Sidebar';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex h-screen gap-2 p-2">
        <SideBar />
        <Detail />
      </main>
    </div>
  );
}

export default App;
