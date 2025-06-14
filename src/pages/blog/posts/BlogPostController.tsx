import React from "react";
import { useParams } from "react-router";
import { getPostBySlug } from "../blogInfo";

const BlogPostController = (): React.JSX.Element => {
  const { slug } = useParams();

  if (!slug) {
    return <div>Error: Post not found</div>;
  }

  const PostComponent = getPostBySlug(slug).post;

  return <PostComponent />;
};

export default BlogPostController;
