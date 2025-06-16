import React from "react";
import { motion, useTime, useTransform } from "framer-motion";
import { Card } from "./ui/card";
import clsx from "clsx";

const RAINBOW_COLORS = [
  "rgba(255, 69, 69, 0.3)", // Red
  "rgba(0, 255, 153, 0.3)", // Green
  "rgba(0, 106, 255, 0.3)", // Blue
  "rgba(255, 0, 149, 0.3)", // Pink
  "rgba(255, 69, 69, 0.3)", // Red
].join(", ");

type ConicGradient = `conic-gradient(from ${string}deg, ${string})`;

const createConicGradient = (rotation: number): ConicGradient =>
  `conic-gradient(from ${rotation}deg, ${RAINBOW_COLORS})`;

type IAnimatedBorderGlassCardProps = {
  borderColor: string;
  children: React.ReactNode;
};

const AnimatedBorderGlassCard = (
  props: IAnimatedBorderGlassCardProps,
): React.JSX.Element => {
  const { children, borderColor } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  const time = useTime();
  const rotate = useTransform(time, [0, 9000], [0, 360], { clamp: false });

  return (
    <div
      className="relative w-full max-w-3xl rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <motion.div
        className="absolute inset-0 z-0 rounded-lg"
        style={{
          background: useTransform([rotate], ([r]: number[]) =>
            // For performance, disable when not used. Note that this abruptly stops the animation when the user exits, but I think this looks okay.
            isHovered ? createConicGradient(r) : null,
          ),
        }}
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
      <Card
        className={clsx(
          "relative z-10 border bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150",
          borderColor,
        )}
      >
        {children}
      </Card>
    </div>
  );
};

export default AnimatedBorderGlassCard;
