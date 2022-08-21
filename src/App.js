import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Thankyou from "./Thankyou";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="thankyou" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
