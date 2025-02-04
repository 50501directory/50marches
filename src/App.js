import React from "react";
import * as ReactRouterDOM from "react-router-dom";
import FiftyMarchesLandingPage from "./pages/fiftymarches-landing-page";
import ResourcesPage from "./pages/resources"; // updated; ensure this path matches your file
import ProtestMap from "./pages/protest-map";
const { BrowserRouter, Routes, Route } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FiftyMarchesLandingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/map" element={<ProtestMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
