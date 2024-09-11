import React from "react";
import FlickeringGrid from "./magicui/flickering-grid";
import Image from "next/image";
import image2 from "../public/image2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
      <main>
        <div className="relative md:h-[500px] rounded-lg w-full bg-background 
        overflow-hidden md:border h-[450px] top-16
        mb-[30vh]">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
            height={800}
          />
          <div>
            <Image
            src={image2}
              className="absolute md:right-0 md:bottom-0 h-full object-fill -z-30"
              width={700}
              height={1000}
              alt="Description of image"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start min-h-screen gap-8 md:gap-16 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-8 items-center sm:items-start z-30 px-4 md:px-8 lg:px-16">
              <p className="text-4xl md:text-6xl lg:text-6xl font-bold  pt-10 text-left md:w-[600px] lg:w-[750px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Welcome to AIMS, your trusted partner for bridging technology
                and business needs.
              </p>
              <div className="p-5 rounded-sm md:bg-transparent bg-red-700 list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                <li className="mb-2 text-white">
                  Explore our profitable wide range of services{" "}
                </li>
                <li>Be a part of the next big thing</li>
              </div>
              <div className="md:absolute flex gap-4 items-center md:right-3 md:bottom-4  flex-row">
                <a
                  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 duration-75"
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Services
                </a>
                <a
                  className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 hover:text-black"
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Products
                </a>
              </div>
              {/* <div className="flex items-center gap-5 text-3xl pt-28 lg:pt-36 md:-mt-5 mt-5">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white hover:scale-105 hover:text-[#63E6BE] cursor-pointer duration-300 "
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white hover:scale-105 hover:text-[#63E6BE] cursor-pointer duration-300 "
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white hover:scale-105 hover:text-[#63E6BE] cursor-pointer duration-300 "
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white hover:scale-105 hover:text-[#63E6BE] cursor-pointer duration-300 "
              />
            </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
