import * as React from "react";

const LazyDynamicBackground = React.lazy(() => import("./DynamicBackground"));

type IBackgroundProps = {
  children: React.ReactNode;
  enableDynamicBackground?: boolean;
};

const StaticBackground = (): React.JSX.Element => (
  <div
    className="
        fixed 
        inset-0
        -z-10
        min-h-screen
        w-full
        bg-gradient-to-br
        from-gray-900
        via-gray-800
        to-gray-900
      "
  />
);

const PageBackground = (props: IBackgroundProps): React.JSX.Element => {
  const [showDynamicBackground, setShowDynamicBackground] =
    React.useState(false);

  React.useEffect(() => {
    setShowDynamicBackground(true);
  }, []);

  return (
    <div className="relative">
      <StaticBackground />

      {showDynamicBackground && (
        <React.Suspense fallback={null}>
          <LazyDynamicBackground />
        </React.Suspense>
      )}

      {/* Content */}
      <div className="relative">{props.children}</div>
    </div>
  );
};

export default PageBackground;
