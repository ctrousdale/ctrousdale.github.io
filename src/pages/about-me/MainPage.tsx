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
import Experience from "./Experience";
import { TbBrandCpp, TbBrandCSharp, TbBrandDocker } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";

const Intro = (): React.JSX.Element => (
  <>
    <section className="flex w-1/2 flex-col gap-y-3">
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
            <p className="pr-1">
              TypeScript/JavaScript, React, Redux, FluentUI, TensorflowJS
            </p>
          </div>
          <div className="flex flex-wrap items-center">
            <p>C#, ASP.NET, .NET MAUI, Blazor</p>
          </div>
          <div className="flex flex-wrap items-center">
            <p>C++, C</p>
          </div>
          <div className="flex flex-wrap items-center">
            <p>Python, Jupyter notebooks, Pandas, Numpy, Scikit-learn</p>
          </div>
          <div className="flex flex-wrap items-center">
            <p>Azure, Docker</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const TechIcons = (): React.JSX.Element => (
  <>
    <div className="flex items-center gap-x-2 pr-4">
      <FaJs />
      <FaReact />
      <SiRedux />
      <SiTensorflow />
    </div>
    <div className="flex items-center gap-x-2 pr-4">
      <TbBrandCSharp />
      <AiOutlineDotNet />
      <SiBlazor />
    </div>
    <div className="flex items-center gap-x-2 pr-4">
      <TbBrandCpp />
    </div>
    <div className="flex items-center gap-x-2 pr-4">
      <FaPython />
      <SiPandas />
      <SiJupyter />
      <SiNumpy />
      <SiScikitlearn />
    </div>
    <div className="flex items-center gap-x-2">
      <VscAzure />
      <TbBrandDocker />
    </div>
  </>
);

const Sources = (): React.JSX.Element => (
  <p>
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

const MainPage = (): React.JSX.Element => (
  <div className="text-neutral-100">
    <article className="flex flex-col items-start gap-5 md:flex-row">
      <Intro />
    </article>
    <article className="align-center mx-auto my-10 text-lg flex w-fit items-center justify-center gap-x-2 rounded-2xl border px-2 py-1">
      <TechIcons />
    </article>
    <article className="flex flex-col items-center">
      <Experience />
    </article>
    <article className="flex flex-col items-center py-15">
      <Sources />
    </article>
  </div>
);

export default MainPage;
