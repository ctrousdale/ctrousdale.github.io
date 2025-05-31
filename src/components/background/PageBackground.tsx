import * as React from "react";

const LazyDynamicBackground = React.lazy(() =>
  import("./DynamicBackground.tsx").then((module) => ({
    default: module.default,
  })),
);

type IBackgroundProps = {
  children: React.ReactNode;
  enableDynamicBackground?: boolean;
};

const PageBackground = (props: IBackgroundProps): React.JSX.Element => {
  const [showDynamicBackground, setShowDynamicBackgroud] =
    React.useState(false);
  // TODO: Check when pageload is done, then load the dynamic background
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
