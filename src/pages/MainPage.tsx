import * as React from "react";

const MainPage = (): React.JSX.Element => {
  return (
    <div className="text-neutral-100">
      <article className="flex flex-col items-center">
        <h2 className="text-4xl">Chandler Trousdale</h2>
        <p>Full-Stack Software Engineer</p>
        <p>Ex-Microsoft</p>
      </article>
      <article className="flex flex-col items-center">
        <h2 className="text-3xl underline">Work</h2>
      </article>
    </div>
  );
};

export default MainPage;
