"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Welcome to AIMS, your trusted partner for bridging technology and business needs.`;
export function TextGenerateEffectDemo() {
  return (
    <div className="ps-5">
      <TextGenerateEffect
      textStyle="text-3xl md:text-6xl lg:text-6xl font-bold  pt-10 text-left md:w-[600px] lg:w-[750px] text-white"
      words={words}
    />
    </div>
    

  );
}
