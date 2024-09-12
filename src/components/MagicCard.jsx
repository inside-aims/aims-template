import { useTheme } from "next-themes";
import Image from "next/image";
import image3 from "../public/image3.jpg";

import { MagicCard } from "@/components/magicui/magic-card";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      id="products"
      className={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] "}
    >
      <div>Products</div>
      <div className="md:flex-row flex h-[500px] w-fullflex-col gap-8 lg:h-[250px] items-center bg-gray-400 px-24">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-[50%] relative"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          {/* Image */}
          <img
            src={image3}
            alt="Card Image"
            className="w-full h-full object-cover"
          />

          {/* Text at the bottom */}
          <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2">
            Xolace
          </div>
        </MagicCard>

        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl w-[50%]"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          AIMS Achievers Network
        </MagicCard>
      </div>
    </div>
  );
}
