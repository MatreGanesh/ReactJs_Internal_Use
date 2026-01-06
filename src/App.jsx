import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Debouncing from "./DebouncingAndThtrottling/Debouncing";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Throttling from "./DebouncingAndThtrottling/Throttling";
import Hoisting from "./Hoisting/Hoisting";
import UseCallback from "./useCallback/UseCallback";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";
import UseEffect from "./UseEffect/UseEffect";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/debouncing" element={<Debouncing />} />
        <Route path="/throttling" element={<Throttling />} />
        <Route path="/hoisting" element={<Hoisting />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/liftingStateUp" element={<LiftingStateUp />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
