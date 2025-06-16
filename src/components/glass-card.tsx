import React from "react";
import { Card } from "./ui/card";
import clsx from "clsx";
import { motion, useTime, useTransform } from "framer-motion";

type IGlassCardProps = {
  className?: string;
  children: React.ReactNode;
};

export const GlassCard = (props: IGlassCardProps): React.JSX.Element => {
  const { className, children } = props;

  return (
    <Card
      className={clsx(
        "w-full max-w-3xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150",
        className,
      )}
    >
      {children}
    </Card>
  );
};

type IAnimatedBorderGlassCardProps = {
  borderColor: string;
  children: React.ReactNode;
};

export const AnimatedBorderGlassCard = (
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
        className="absolute inset-0 rounded-lg"
        style={{
          background: useTransform(
            [rotate],
            ([r]) =>
              `conic-gradient(from ${r}deg, rgba(255, 69, 69, 0.3), rgba(0, 255, 153, 0.3), rgba(0, 106, 255, 0.3), rgba(255, 0, 149, 0.3), rgba(255, 69, 69, 0.3))`,
          ),
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
      <Card
        className={clsx(
          "relative border bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150",
          borderColor,
        )}
      >
        {children}
      </Card>
    </div>
  );
};
