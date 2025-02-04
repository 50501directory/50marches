import React from "react";
import * as ReactRouterDOM from "react-router-dom";
import { Helmet } from 'react-helmet';
import FiftyMarchesLandingPage from "./pages/fiftymarches-landing-page";
import ResourcesPage from "./pages/resources"; // updated; ensure this path matches your file
import ProtestMap from "./pages/protest-map";
const { BrowserRouter, Routes, Route } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>50 Marches - United Against Project 2025</title>
        <meta name="title" content="50 Marches - United Against Project 2025" />
        <meta name="description" content="Join 50 Marches on 2/5/25 to defend liberty, equality, and justice. When policies are designed to put Americans last, our voices must rise." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://50marches.com/" />
        <meta property="og:title" content="50 Marches - United Against Project 2025" />
        <meta property="og:description" content="Join 50 Marches on 2/5/25 to defend liberty, equality, and justice. When policies are designed to put Americans last, our voices must rise." />
        <meta property="og:image" content="https://50marches.com/assets/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://50marches.com/" />
        <meta property="twitter:title" content="50 Marches - United Against Project 2025" />
        <meta property="twitter:description" content="Join 50 Marches on 2/5/25 to defend liberty, equality, and justice. When policies are designed to put Americans last, our voices must rise." />
        <meta property="twitter:image" content="https://50marches.com/assets/og-image.png" />
      </Helmet>
      <Routes>
        <Route path="/" element={<FiftyMarchesLandingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/map" element={<ProtestMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
