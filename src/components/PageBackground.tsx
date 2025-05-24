import * as React from "react";

type IBackgroundProps = {
  children: React.ReactNode;
};

const PageBackground = (props: IBackgroundProps): React.JSX.Element => {
  return (
    // flex items-center justify-center w-full
    <div
      className="
        min-h-screen
        w-full
        bg-gradient-to-br
        from-gray-900
        via-gray-800
        to-gray-900
        text-white
      "
    >
      {props.children}
    </div>
  );
};

export default PageBackground;
