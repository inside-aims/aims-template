"use client";
import React from "react";

import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import nath from "../public/members/CTO_Nathan.jpg";
import kobby from "../public/members/CEO-Kobby.jpg";
import kwame from "../public/members/COO-Emma.jpg";

const people = [
  {
    id: 1,
    name: "Andrew Nana Beniako",
    designation: "Chief Executive Officer",
    image: kobby,
  },
  {
    id: 2,
    name: "Nathaniel Edem Adama",
    designation: "Chief Technical Officer",
    image: nath,
  },
  {
    id: 3,
    name: "Emmanuel Acquah",
    designation: "Chief Operations Officer",
    image: kwame,
  },
  {
    id: 4,
    name: "Charity Boateng",
    designation: "Chief Financial Officer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  //   {
  //     id: 5,
  //     name: "Tyler Durden",
  //     designation: "Soap Developer",
  //     Image:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  //   },
  //   {
  //     id: 6,
  //     name: "Dora",
  //     designation: "The Explorer",
  //     Image:
  //       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  //   },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
