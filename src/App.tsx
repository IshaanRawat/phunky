import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Holders from "./components/pages/Holders";
import Home from "./components/pages/Home";
import Header from "./components/ui/Header";

function App() {
  return (
    <main className="font-mono bg-p-black text-white py-[30vh]">
      <Router>
        <Header />
        <Routes>
          <Route path="/holders" element={<Holders />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
