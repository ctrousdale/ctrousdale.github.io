import * as React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Intro from "./Intro";
import Sources from "./Sources";

// Currently unused:
// const TechIcons = (): React.JSX.Element => (
//   <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
//     <div className="flex items-center gap-x-2 pr-4">
//       <FaJs />
//       <FaReact />
//       <SiRedux />
//       <SiTensorflow />
//     </div>
//     <div className="flex items-center gap-x-2 pr-4">
//       <TbBrandCSharp />
//       <AiOutlineDotNet />
//       <SiBlazor />
//     </div>
//     <div className="flex items-center gap-x-2 pr-4">
//       <TbBrandCpp />
//     </div>
//     <div className="flex items-center gap-x-2 pr-4">
//       <FaPython />
//       <SiPandas />
//       <SiJupyter />
//       <SiNumpy />
//       <SiScikitlearn />
//     </div>
//     <div className="flex items-center gap-x-2">
//       <VscAzure />
//       <TbBrandDocker />
//     </div>
//   </div>
// );

const MainPage = (): React.JSX.Element => (
  <div className="mb-10 flex flex-col gap-20 text-neutral-100">
    <article>
      <Intro />
    </article>
    {/*}
      <p className="my-10 text-center">
        This website is an interactive art piece! By interacting with this site
        you're training an ML model that influences the movement of the shapes in
        the background.
      </p>
    */}
    {/* <article className="align-center mx-auto my-10 flex w-fit items-center justify-center gap-x-2 rounded-2xl border px-2 py-1 text-lg"> */}
    {/*   <TechIcons /> */}
    {/* </article> */}
    <article>
      <Experience />
    </article>
    <article>
      <Projects />
    </article>
    <article>
      <Sources />
    </article>
  </div>
);

export default MainPage;
