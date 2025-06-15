import { Card } from "./ui/card";

type IGlassCardProps = {
  children: React.ReactNode;
};

const GlassCard = (props: IGlassCardProps): React.JSX.Element => (
  <Card className="w-full max-w-xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
    {props.children}
  </Card>
);
export default GlassCard;
