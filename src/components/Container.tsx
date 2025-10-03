import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container mx-auto max-w-7xl px-4 md:px-6 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  );
}
