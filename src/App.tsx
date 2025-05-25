import * as React from "react";
import { Button } from "./components/ui/button";
import PageBackground from "./components/PageBackground";
import PageNavMenu from "./components/PageNavMenu";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <PageBackground>
      <PageNavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </PageBackground>
  );
}

export default App;
