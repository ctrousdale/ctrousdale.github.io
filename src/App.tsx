// import * as React from "react";
import PageBackground from "./components/background/PageBackground.tsx";
import PageNavMenu from "./components/PageNavMenu";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import BlogCards from "./pages/blog/Blog";

function App() {
  return (
    <PageBackground>
      <PageNavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogCards />} />
      </Routes>
    </PageBackground>
  );
}

export default App;
