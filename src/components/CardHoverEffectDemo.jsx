"use client"; // Add this line to indicate it's a Client Component

import { useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import NumberTickerDemo from "./NumberTickerDemo";

export function CardHoverEffectDemo() {
  return (
    <>
      <main>
        <div className="flex flex-row items-center justify-center md:justify-normal">
            <div className="text-4xl md:text-6xl font-bold">
                Projects
            </div>
            <div className=" ms-10">
                <NumberTickerDemo/>
            </div>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </main>
    </>
  );
}

export const projects = [
  {
    title: "AIMS Achievers Network",
    description:
      "A digital platform designed to celebrate and recognize outstanding achievements within educational institutions. It offers features for nominations, voting, and displaying awards for students, including categories for academics, leadership, creativity, and more. The hub aims to foster a culture of recognition and motivation among students by providing a user-friendly interface for both nominators and nominees.",
    link: "https://campushonorshub.com",
  },
  {
    title: "Xolace",
    description:
      "Xolace is an anonymous messaging platform developed by AIMS (Atlas Innovations & Meta Solutions). It offers users a safe space to share their thoughts, feelings, and stories without revealing their identity. Whether you're seeking support, expressing yourself, or just venting, Xolace ensures your privacy while fostering meaningful connections",
    link: "https://netflix.com",
  },
];
