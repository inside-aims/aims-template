"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Welcome to AIMS, your trusted partner for bridging technology
                and business needs.`;
export function TextGenerateEffectDemo() {
  return (
    <TextGenerateEffect
      textStyle="text-2xl md:text-6xl lg:text-6xl font-bold  pt-10 text-left md:w-[600px] lg:w-[750px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
      words={words}
    />
  );
}
