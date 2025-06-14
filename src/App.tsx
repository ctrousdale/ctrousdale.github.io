// import * as React from "react";
import PageBackground from "./components/background/PageBackground.tsx";
import PageNavMenu from "./components/PageNavMenu";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router";
import { Blog } from "./pages/blog/Blog.tsx";
import BlogPostController from "./pages/blog/posts/BlogPostController.tsx";

function App() {
  return (
    <PageBackground>
      <PageNavMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostController />} />
      </Routes>
    </PageBackground>
  );
}

export default App;
