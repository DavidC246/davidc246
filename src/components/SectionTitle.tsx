import React from "react";
import { Container } from "@/components/Container";

type SectionAlign = "left" | "center";
type SectionTone = "dark" | "light";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: SectionAlign;
  tone?: SectionTone;
  children?: React.ReactNode;
}

const toneMap: Record<SectionTone, { preTitle: string; title: string; body: string }> = {
  dark: {
    preTitle: "text-amber-500",
    title: "text-gray-900",
    body: "text-gray-600",
  },
  light: {
    preTitle: "text-amber-300",
    title: "text-white",
    body: "text-gray-300",
  },
};

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  const { align = "center", tone = "dark" } = props;
  const colors = toneMap[tone];

  return (
    <Container
      className={`flex w-full flex-col p-5 space-y-6 ${
        align === "left" ? "items-start text-left" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className={`text-xs font-semibold uppercase tracking-[0.28em] ${colors.preTitle}`}>
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className={`max-w-3xl font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight ${colors.title}`}>
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className={`max-w-2xl font-sans text-base sm:text-lg leading-relaxed ${colors.body}`}>
          {props.children}
        </p>
      )}
    </Container>
  );
};
