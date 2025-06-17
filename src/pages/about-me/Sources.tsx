import React from "react";

const Sources = (): React.JSX.Element => (
  <p className="text-center text-neutral-50">
    The design language for this site was heavily inspired by{" "}
    <a
      href="https://brittanychiang.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline hover:text-blue-300"
    >
      Brittany Chiang
    </a>
    ,{" "}
    <a
      href="https://www.craftz.dog/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline hover:text-blue-300"
    >
      Takuya Matsuyama
    </a>
    , and the Windows Terminal acrylic theme.
  </p>
);

export default Sources;
