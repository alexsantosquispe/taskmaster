function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex w-full border-b border-gray-200 p-4">
        TaskMaster logo
      </header>
      <main className="flex h-screen gap-2 p-2">
        <section className="flex w-80 rounded-xl border border-neutral-200 bg-neutral-100 p-4">
          <nav>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </nav>
        </section>
        <section className="flex w-full flex-col rounded-xl border border-neutral-200 p-4">
          detail content
        </section>
      </main>
      <footer className="border-t border-gray-200 p-3 text-center text-sm">
        &copy; 2025
      </footer>
    </div>
  );
}

export default App;
