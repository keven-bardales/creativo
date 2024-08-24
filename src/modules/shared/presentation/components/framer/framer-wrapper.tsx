"use client";

import React, { ReactHTML } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type MotionComponentProps<TagName extends keyof ReactHTML> = HTMLMotionProps<TagName>;

interface FramerProps<TagName extends keyof ReactHTML> {
  as: TagName;
  children?: React.ReactNode;
  props?: MotionComponentProps<TagName>;
}

function Framer<TagName extends keyof ReactHTML>({ as, children, ...props }: FramerProps<TagName>) {
  const MotionComponent = motion[as as keyof typeof motion];

  return <MotionComponent {...props}>{children}</MotionComponent>;
}

export default Framer;
