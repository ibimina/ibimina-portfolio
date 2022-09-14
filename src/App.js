import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";

// import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Thankyou from "./Thankyou";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="thankyou" element={<Thankyou />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
