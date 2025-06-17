import * as React from "react";
import { motion } from "framer-motion";
import StaticBackground from "./StaticBackground";
import LazyDynamicBackground from "./LazyDynamicBackground";

type IBackgroundProps = {
  children: React.ReactNode;
};

const PageBackground = (props: IBackgroundProps): React.JSX.Element => {
  const [showDynamicBackground, setShowDynamicBackground] =
    React.useState(false);

  React.useEffect(() => {
    // This looks dumb, but it allows the StaticBackground to render immediately.
    // Once the component mounts, the dynamic background will lazily load in.
    setShowDynamicBackground(true);
  }, []);

  return (
    <div className="relative">
      <StaticBackground />
      {showDynamicBackground && (
        <React.Suspense fallback={null}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeIn",
            }}
          >
            <LazyDynamicBackground />
          </motion.div>
        </React.Suspense>
      )}
      <div className="relative">{props.children}</div>
    </div>
  );
};

export default PageBackground;
