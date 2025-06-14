import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import * as React from "react";

type IBlogCardProps = {
  title: string;
  description: string;
};
const BlogCard = (
  props: IBlogCardProps & { extra: string },
): React.JSX.Element => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute w-full h-full text-center"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Card className="w-full h-full flex flex-col ">
            <CardHeader>
              <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <p>{props.description}</p>
            </CardContent>
          </Card>
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Card className="w-full h-full flex flex-col">
            <CardContent className="flex-1 flex items-center justify-center">
              <p>{props.extra}</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

const BlogCards = (): React.JSX.Element => {
  return (
    <div className="container mx-auto py-8 px-20">
      <div className="grid grid-cols-2 gap-10 auto-rows-[200px]">
        <BlogCard title={"title"} description="description" />
        <BlogCard title={"title"} description="description" />
        <BlogCard title={"title"} description="description" />
        <BlogCard title={"title"} description="description" />
        <BlogCard title={"title"} description="description" />
      </div>
    </div>
  );
};

export default BlogCards;
