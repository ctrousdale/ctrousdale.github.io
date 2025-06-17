import React from "react";
import { AnimatePresence, motion, useTime, useTransform } from "framer-motion";
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
  const timeToRotationTransform = useTransform(time, [0, 6000], [0, 360], {
    clamp: false,
  });
  const rotationToConicTransform = useTransform(
    [timeToRotationTransform],
    ([r]: number[]) => createConicGradient(r),
  );

  return (
    <Card
      className={clsx(
        "relative flex h-full flex-col overflow-hidden bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150",
        borderColor,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-0 rounded-xl"
            style={{
              background: rotationToConicTransform,
              borderRadius: "inherit",
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </Card>
  );
};

export default AnimatedBorderGlassCard;
