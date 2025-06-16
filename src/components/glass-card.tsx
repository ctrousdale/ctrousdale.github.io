import React from "react";
import { Card } from "./ui/card";
import clsx from "clsx";

type IGlassCardProps = {
  className?: string;
  children: React.ReactNode;
};

const GlassCard = (props: IGlassCardProps): React.JSX.Element => {
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

export default GlassCard;
