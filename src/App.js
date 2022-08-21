import { HashRouter, Route, Routes } from "react-router-dom";

import "./App.css";

// import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Thankyou from "./Thankyou";


function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <NavBar /> */}
        {/* <Portfolio /> */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="thankyou" element={<Thankyou />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
