import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as React from "react";

type IBlogCardProps = {
  title: string;
  description: string;
};

const BlogCard = (props: IBlogCardProps): React.JSX.Element => (
  <Card>
    <CardHeader>
      <CardTitle>{props.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{props.description}</p>
    </CardContent>
  </Card>
);

const Blog = (): React.JSX.Element => {
  return (
    <div className="container mx-auto py-8 px-20">
      <div className="grid grid-cols-2 gap-10">
        <BlogCard title={"title"} description="description" />
        <BlogCard title={"title"} description="description" />
        <BlogCard title={"title"} description="description" />
        <BlogCard title={"title"} description="description" />
        <BlogCard title={"title"} description="description" />
      </div>
    </div>
  );
};

export default Blog;
