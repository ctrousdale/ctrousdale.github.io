import PortfolioSite from "./posts/PortfolioSite";
import WifiSniffer from "./posts/WifiSniffer";

type IPostInfo = {
  humanFriendlyName: string;
  slug: string;
  post: React.ComponentType;
};

export const Posts: Record<string, IPostInfo> = {
  WifiSniffer: {
    humanFriendlyName: "WifiSniffer",
    slug: "esp32-wifi-sniffer",
    post: WifiSniffer,
  },
  PortfolioSite: {
    humanFriendlyName: "PortfolioSite",
    slug: "portfolio-site",
    post: PortfolioSite,
  },
} as const;

const postValues = Object.values(Posts);

export const getPostBySlug = (slug: string): IPostInfo => {
  const post = postValues.filter((postInfo) => postInfo.slug === slug);

  if (post.length === 0) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  if (post.length > 1) {
    throw new Error(`Multiple posts found with slug "${slug}"`);
  }

  return post[0];
};
