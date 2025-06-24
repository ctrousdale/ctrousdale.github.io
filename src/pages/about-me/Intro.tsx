import React from "react";

const Intro = (): React.JSX.Element => (
  <div className="flex flex-col gap-5 md:flex-row md:items-start">
    <section className="flex flex-col gap-y-3 text-center md:w-1/2 md:text-left">
      <h2 className="text-5xl">Chandler Trousdale</h2>
      <p>Full-Stack Software Engineer</p>
    </section>
    <section className="md:w-1/2">
      <div className="flex flex-col gap-y-2">
        <p className="text-center text-lg md:text-left">
          I prioritize fundamentals, iterative improvement, and modern
          technologies.
        </p>
        <div className="flex flex-col gap-y-1 font-mono">
          <div className="flex flex-wrap">
            <p className="w-full pr-1 text-center md:text-left">
              TypeScript/JavaScript, React, Redux, FluentUI, TensorflowJS
            </p>
          </div>
          <div className="flex flex-wrap">
            <p className="w-full text-center md:text-left">
              C#, ASP.NET, .NET MAUI, Blazor
            </p>
          </div>
          <div className="flex flex-wrap">
            <p className="w-full text-center md:text-left">C++, C</p>
          </div>
          <div className="flex flex-wrap">
            <p className="w-full pr-1 text-center md:text-left">
              Python, Jupyter notebooks, Pandas, Numpy, Scikit-learn
            </p>
          </div>
          <div className="flex flex-wrap">
            <p className="w-full pr-1 text-center md:text-left">
              Azure, Docker, KQL, NoSQL, SQL
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Intro;
