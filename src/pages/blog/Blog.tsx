import React from "react";
import BlogCard from "./BlogCard";

export const Blog = (): React.JSX.Element => {
  return (
    <div className="mx-auto mt-12 max-w-xl px-4 py-8">
      <div className="flex flex-col space-y-5">
        <BlogCard
          title="Portfolio site"
          description="This website!"
          content="I wanted to showcase my projects, publish some blog posts, and practice web dev outside the context of a work environment."
          badges={[
            "React",
            "TypeScript",
            "shadcn",
            "Vite",
            "TailwindCSS",
            "Framer Motion",
            "TensorFlow.js",
          ]}
        />
        {/* <BlogCard /> */}
      </div>
    </div>
  );
};
