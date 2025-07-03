import { Detail } from './components/molecules/Detail/Detail';
import { Sidebar } from './components/molecules/Sidebar/Sidebar';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex h-screen gap-2 p-2">
        <Sidebar />
        <Detail />
      </main>
    </div>
  );
}

export default App;
