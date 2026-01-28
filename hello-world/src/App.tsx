import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeMenuButton from "./player/HomeMenuButton";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PlayerComponent from "./player/player.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <div style={{ position: 'relative', minHeight: '100vh' }}>
              {/* HomeMenuButton added to the home page */}
              <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 101 }}>
                <HomeMenuButton />
              </div>
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more Hello World!
              </p>
            </div>
      )}
        />
        <Route path="/player" element={<PlayerComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
