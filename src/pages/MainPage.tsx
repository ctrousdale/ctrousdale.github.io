import * as React from "react";
import { FaMicrosoft, FaJs, FaReact, FaPython } from "react-icons/fa6";
import {
  SiBlazor,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiRedux,
  SiScikitlearn,
} from "react-icons/si";

const MainPage = (): React.JSX.Element => {
  return (
    <div className="text-neutral-100">
      <article className="flex flex-row items-start">
        <section className="w-1/2">
          <h2 className="text-4xl">Chandler Trousdale</h2>
          <p>Full-Stack Software Engineer</p>
          <div className="flex items-center gap-x-2">
            <p>Ex-Microsoft</p>
            <FaMicrosoft />
          </div>
        </section>
        <section className="w-1/2">
          <div className="flex flex-col gap-y-2">
            <p className="text-lg">
              I prioritize fundamentals, iterative improvement, and modern
              technologies.
            </p>
            <div className="flex flex-col gap-y-1 font-mono">
              <div className="flex flex-wrap items-center">
                <p className="pr-1">TypeScript/JavaScript</p>
                <FaJs />
                <p className="pr-1">, React</p>
                <FaReact />
                <p className="pr-1">, Redux</p>
                <SiRedux />
              </div>
              <div className="flex flex-wrap items-center">
                <p>C#</p>
                <p>, ASP.NET</p>
                <p>, .NET MAUI</p>
                <p className="pr-1">, Blazor</p>
                <SiBlazor />
              </div>
              <div className="flex flex-wrap items-center">
                <p>C++</p>
                <p>, C</p>
              </div>
              <div className="flex flex-wrap items-center">
                <p className="pr-1">Python</p>
                <FaPython />
                <p className="pr-1">, Jupyter notebooks</p>
                <SiJupyter />
                <p className="pr-1">, Pandas</p>
                <SiPandas />
                <p className="pr-1">, Numpy</p>
                <SiNumpy />
                <p className="pr-1">, Scikit-learn</p>
                <SiScikitlearn />
              </div>
            </div>
          </div>
        </section>
      </article>
      <h2 className="text-3xl underline">Work</h2>
    </div>
  );
};

export default MainPage;
