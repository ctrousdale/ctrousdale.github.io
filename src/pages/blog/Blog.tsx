import React from "react";
import BlogCard from "./BlogCard";
import { Posts } from "./blogInfo";

export const Blog = (): React.JSX.Element => {
  return (
    <div className="mx-auto mt-12 max-w-xl px-4 py-8">
      <div className="flex flex-col space-y-5">
        <BlogCard
          title="Portfolio site"
          slug={Posts.PortfolioSite.slug}
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
        <BlogCard
          title="ESP32 Wifi Sniffer"
          slug={Posts.WifiSniffer.slug}
          description="A hardware WiFi sniffer for network recon"
          content={
            "A lot of the WiFi hacking (and pentesting techniques in general) that I learned about in university are based on older, less secure protocols. I wanted to explore challenges that are more relevant to modern networks which use, e.g., WPA3-Personal."
          }
          badges={[
            "ESP32C6",
            "ESP-IDF",
            "FreeRTOS",
            "C",
            "C++",
            "C#",
            "Network Security",
            "IoT",
            "Wireshark",
          ]}
        />
      </div>
    </div>
  );
};
