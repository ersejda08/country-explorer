import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <h1 className="text-4xl font-bold text-emerald-400">Hello 🌍</h1>
      </div>
    </>
  );
}

export default App;
