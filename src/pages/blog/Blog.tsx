import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BlogCard = (): React.JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Some title</CardTitle>
        <CardDescription>Some description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some card content</p>
      </CardContent>
      <CardFooter className="flex justify-center space-x-2">
        <Badge>React</Badge>
        <Badge>TypeScript</Badge>
        <Badge>shadcn</Badge>
        <Badge>Vite</Badge>
      </CardFooter>
    </Card>
  );
};

export const Blog = (): React.JSX.Element => {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="flex flex-col space-y-5">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
