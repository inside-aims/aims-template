import React from "react";
import WordRotate from "./magicui/word-rotate";

const Footer = () => {
  return (
    <>
      <p className="text-sm text-white text-center">
        Copyright © 2024 <span className="text-green-300">AIMS</span>. All
        rights reserved.
      </p>
      <p className="text-sm text-white text-center">
        Show some love ❤️ for the team
      </p>

      <div>
        <WordRotate
          className="text-1xl font-semibold text-amber-400 dark:text-white text-center"
          words={["Main Website", "Coming Soon"]}
        />
      </div>
    </>
  );
};

export default Footer;
