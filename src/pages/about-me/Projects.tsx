import AnimatedBorderGlassCard from "@/components/animated-border-glass-card";
import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = (): React.JSX.Element => (
  <div className="mx-auto w-full max-w-3xl">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <AnimatedBorderGlassCard borderColor="border-emerald-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">Portfolio Website</CardTitle>
          <CardDescription className="text-neutral-300">
            June 2025
          </CardDescription>
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
        <CardFooter className="mt-auto gap-0.5">
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
          <CardDescription className="text-neutral-300">
            March 2025
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-2 text-neutral-50">
          <p>
            Instead of buying a Flipper Zero or Hak5 WiFi Pineapple, I wanted to
            challenge myself by implementing my own pentesting tools. I wrote a
            simple commandline tool that creates a pipe and forwards the scanned
            packets to a Wireshark instance for analysis.
          </p>
        </CardContent>
        <CardFooter className="mt-auto gap-0.5">
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
          <CardDescription className="text-neutral-300">
            2023 - Current
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-2 flex flex-col gap-y-1.5 text-sm text-neutral-50">
          <p>
            Created a Discord bot to solve common user complaints with the
            platform including enhanced video embedding for social media
            websites, easy retrieval of tagged content, and AI integration via
            ChatGPT.
          </p>
        </CardContent>
        <CardFooter className="mt-auto gap-0.5">
          <Badge>C#</Badge>
          <Badge>.NET</Badge>
          <Badge>DSharpPlus</Badge>
          <Badge>OpenAI</Badge>
          <Badge>Docker</Badge>
          <Badge>Azure</Badge>
        </CardFooter>
      </AnimatedBorderGlassCard>
      <AnimatedBorderGlassCard borderColor="border-emerald-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">TinyML Plant Growth</CardTitle>
          <CardDescription className="text-neutral-300">
            August - May 2021
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-2 flex flex-col gap-y-1.5 text-sm text-neutral-50">
          <p>
            Performed some agricultural experiments on optimal growing
            conditions of green onions. Used the results of this research to
            train an ML model that could optimize several factors (water level,
            light, relative humidity, etc.) to maximize growth rate. This model
            was then miniturized via TinyML and deployed in-memory to an
            Arduino.
          </p>
        </CardContent>
        <CardFooter className="mt-auto gap-0.5">
          <Badge>Python</Badge>
          <Badge>Sklearn</Badge>
          <Badge>Arduino</Badge>
        </CardFooter>
      </AnimatedBorderGlassCard>
      <AnimatedBorderGlassCard borderColor="border-emerald-500">
        <CardHeader>
          <CardTitle className="text-neutral-50">
            License Plate and Shape Detection
          </CardTitle>
          <CardDescription className="text-neutral-300">
            January - April 2018
          </CardDescription>
        </CardHeader>
        <CardContent className="mb-2 flex flex-col gap-y-1.5 text-sm text-neutral-50">
          <p>
            Developed a C++ application that can detect image shapes and extract
            license plates from images. This was a fundamentals group project
            that introduced us to computer vision and ML techniques such as
            contour extraction and image preprocessing.
          </p>
        </CardContent>
        <CardFooter className="mt-auto gap-0.5">
          <Badge>C++</Badge>
          <Badge>OpenCV</Badge>
          <Badge>Dlib</Badge>
        </CardFooter>
      </AnimatedBorderGlassCard>
    </div>
  </div>
);

export default Projects;
