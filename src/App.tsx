// import * as React from "react";
import PageBackground from "./components/background/PageBackground.tsx";
import PageNavMenu from "./components/PageNavMenu";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import BlogCards from "./pages/blog/BlogCards.tsx";
import { Blog } from "./pages/blog/Blog.tsx";

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
