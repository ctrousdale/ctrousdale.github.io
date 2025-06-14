import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type IBlogCardProps = {
  title: string;
  description: string;
  content: string;
  badges: string[];
};

const BlogCard = (props: IBlogCardProps): React.JSX.Element => {
  const { title, description, content, badges } = props;

  const Badges = (): React.JSX.Element => (
    <>
      {badges.map((badge, index) => (
        <Badge key={index} className="">
          {badge}
        </Badge>
      ))}
    </>
  );

  return (
    <Card className="border border-gray-200 bg-gray-50 shadow-lg hover:shadow-2xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex w-full flex-wrap justify-center gap-x-1 gap-y-1 px-4">
        <Badges />
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
