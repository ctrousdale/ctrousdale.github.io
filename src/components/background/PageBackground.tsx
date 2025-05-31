import * as React from "react";

const LazyDynamicBackground = React.lazy(() =>
  import("./DynamicBackground").then((module) => ({
    default: module.DynamicBackground,
  })),
);

type IBackgroundProps = {
  children: React.ReactNode;
  enableDynamicBackground?: boolean;
};

const PageBackground = (props: IBackgroundProps): React.JSX.Element => {
  const [showDynamicBackground, setShowDynamicBackground] =
    React.useState(false);

  React.useEffect(() => {
    setShowDynamicBackground(true);
  }, []);

  return (
    <div className="relative">
      {/* Static content */}
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
