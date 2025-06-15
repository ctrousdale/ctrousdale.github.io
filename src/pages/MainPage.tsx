import * as React from "react";
import { VscAzure } from "react-icons/vsc";
import { FaJs, FaReact, FaPython } from "react-icons/fa6";
import {
  SiBlazor,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiRedux,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import Experience from "./experience/Experience";

const MainPage = (): React.JSX.Element => (
  <div className="text-neutral-100">
    <article className="flex flex-col gap-5 md:flex-row items-start">
      <section className="w-1/2">
        <h2 className="text-5xl">Chandler Trousdale</h2>
        <p>Full-Stack Software Engineer</p>
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
              <span>,&nbsp;</span>
              <p className="pr-1">React</p>
              <FaReact />
              <span>,&nbsp;</span>
              <p className="pr-1">Redux</p>
              <SiRedux />
              <span>,&nbsp;</span>
              <p className="pr-1">TensorflowJS</p>
              <SiTensorflow />
            </div>
            <div className="flex flex-wrap items-center">
              <p>C#</p>
              <span>,&nbsp;</span>
              <p>ASP.NET</p>
              <span>,&nbsp;</span>
              <p>.NET MAUI</p>
              <span>,&nbsp;</span>
              <p className="pr-1">Blazor</p>
              <SiBlazor />
            </div>
            <div className="flex flex-wrap items-center">
              <p>C++</p>
              <span>,&nbsp;</span>
              <p>C</p>
            </div>
            <div className="flex flex-wrap items-center">
              <p className="pr-1">Python</p>
              <FaPython />
              <span>,&nbsp;</span>
              <p className="pr-1">Jupyter notebooks</p>
              <SiJupyter />
              <span>,&nbsp;</span>
              <p className="pr-1">Pandas</p>
              <SiPandas />
              <span>,&nbsp;</span>
              <p className="pr-1">Numpy</p>
              <SiNumpy />
              <span>,&nbsp;</span>
              <p className="pr-1">Scikit-learn</p>
              <SiScikitlearn />
            </div>
            <div className="flex flex-wrap items-center">
              <p className="pr-1">Azure</p>
              <VscAzure />
            </div>
          </div>
        </div>
      </section>
    </article>
    <article className="flex flex-col items-center p-10">
      <Experience />
    </article>
  </div>
);

export default MainPage;
