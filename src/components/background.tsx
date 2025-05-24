import * as React from "react";

type IBackgroundProps = {
  children: React.ReactNode;
};

const Background = (props: IBackgroundProps): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {props.children}
    </div>
  );
};

export default Background;
