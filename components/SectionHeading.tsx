import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`eyebrow ${center ? "justify-center" : ""} ${light ? "!text-lime-300" : ""}`}>{eyebrow}</div>
      <h2 className={`h2 ${light ? "!text-white" : ""}`}>{title}</h2>
      {description && <p className={`lead mt-4 ${light ? "!text-white/75" : ""}`}>{description}</p>}
    </div>
  );
}
