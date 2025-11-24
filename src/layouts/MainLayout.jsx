const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
        <header className="bg-slate-800 border-b border-slate-700">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <span>🌍</span>
              <span>Country Explorer</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Learn about countries around the world
            </p>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 py-4">{/**{children} */}</div>
        </main>

        <footer className="bg-slate-800 border-t border-slate-700 text-xs text-slate-400 text-center py-3">
          Data from REST Countries API
        </footer>
      </div>
    </>
  );
};

export default MainLayout;
