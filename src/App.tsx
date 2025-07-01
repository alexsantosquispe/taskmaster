function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex p-2 h-screen gap-2">
        <aside className="flex w-80 bg-gray-100 border border-gray-200 rounded-xl p-4">
          <div>menu options</div>
        </aside>
        <section className=" border border-gray-200 rounded-xl flex flex-col w-full p-4">
          detail content
        </section>
      </main>
    </div>
  );
}

export default App;
