import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import DocsPage from "./pages/DocsPage.jsx";
import ApiPage from "./pages/ApiPage.jsx";
import Pricing from "./pages/Pricing.jsx";
import TryPage from "./pages/TryPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DocsPage />} />
        <Route path="/api-keys" element={<ApiPage />} />
        <Route path="/try" element={<TryPage />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
    </Routes>
  );
};

export default App;
