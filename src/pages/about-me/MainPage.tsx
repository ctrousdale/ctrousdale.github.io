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
import GlassCard from "@/components/glass-card";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedBorderGlassCard from "@/components/animated-border-glass-card";

const Intro = (): React.JSX.Element => (
  <>
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
              Azure, Docker
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

const TechIcons = (): React.JSX.Element => (
  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
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
  </div>
);

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

const Projects = (): React.JSX.Element => (
  <div className="mx-auto w-full max-w-3xl">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
      <AnimatedBorderGlassCard borderColor="border-emerald-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">Portfolio Website</CardTitle>
        </CardHeader>
        <CardContent className="mb-2 flex flex-col gap-3 text-neutral-50">
          <p>
            This very website! I wanted to work on web development skills
            outside the context of work, without using OOTB enterprise
            frameworks.
          </p>
          <p>
            The ThreeJS shapes in the background aren't statically rendered -
            their movements are influenced by a TensorflowJS model that predicts
            the next position based on your inputs.
          </p>
        </CardContent>
        <CardFooter className="mt-auto flex flex-wrap gap-0.5">
          <Badge>TypeScript</Badge>
          <Badge>Vite</Badge>
          <Badge>ThreeJS</Badge>
          <Badge>TensorFlowJS</Badge>
        </CardFooter>
      </AnimatedBorderGlassCard>
      <AnimatedBorderGlassCard borderColor="border-emerald-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">
            ESP32C6 WiFi Packet Sniffer
          </CardTitle>
        </CardHeader>
        <CardContent className="mb-2 text-neutral-50">
          <p>
            Instead of buying a Flipper Zero or Hak5 WiFi Pineapple, I wanted to
            explore the difficulty of implementing my own pentesting tools. I
            wrote a simple commandline tool that creates a pipe and forwards the
            scanned packets to a Wireshark instance for analysis.
          </p>
        </CardContent>
        <CardFooter className="mt-auto flex flex-wrap gap-0.5">
          <Badge>C</Badge>
          <Badge>C++</Badge>
          <Badge>C#</Badge>
          <Badge>FreeRTOS</Badge>
          <Badge>ESP-IDF</Badge>
          <Badge>Wireshark</Badge>
        </CardFooter>
      </AnimatedBorderGlassCard>
      <AnimatedBorderGlassCard borderColor="border-emerald-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">Discord Bot</CardTitle>
        </CardHeader>
        <CardContent className="mb-2 flex flex-col gap-y-1.5 text-sm text-neutral-50">
          <p>
            Created a Discord bot to solve common user complaints with the
            platform, including enhanced video embedding for social media
            websites, and AI integration via ChatGPT,{" "}
          </p>
        </CardContent>
        <CardFooter className="mt-auto flex flex-wrap gap-0.5">
          <Badge>C#</Badge>
          <Badge>.NET</Badge>
          <Badge>DSharpPlus</Badge>
          <Badge>OpenAI</Badge>
          <Badge>Docker</Badge>
          <Badge>Azure</Badge>
        </CardFooter>
      </AnimatedBorderGlassCard>
    </div>
  </div>
);

const MainPage = (): React.JSX.Element => (
  <div className="text-neutral-100">
    <article className="flex flex-col gap-5 md:flex-row md:items-start">
      <Intro />
    </article>
    <article className="align-center mx-auto my-10 flex w-fit items-center justify-center gap-x-2 rounded-2xl border px-2 py-1 text-lg">
      <TechIcons />
    </article>
    <article className="flex flex-col items-center">
      <Experience />
    </article>
    <article className="flex flex-col items-center pt-20">
      <Projects />
    </article>
    <article className="flex flex-col items-center py-10 md:py-15">
      <Sources />
    </article>
  </div>
);

export default MainPage;
