import { type Config } from "prettier";

const config: Config = {
  trailingComma: "all",
  singlequote: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
